/* ==========================================
   SAUDARA DEKAT — API SERVICE LAYER
   Connects frontend to Express.js backend
   ========================================== */

const API_BASE = window.location.origin + '/api';

// ---- Auth State ----
let authState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false
};

// Try to restore auth from localStorage
function restoreAuth() {
    try {
        const saved = localStorage.getItem('sd_auth');
        if (saved) {
            authState = JSON.parse(saved);
        }
    } catch (e) {}
}

function saveAuth() {
    localStorage.setItem('sd_auth', JSON.stringify(authState));
}

function clearAuth() {
    authState = { user: null, accessToken: null, refreshToken: null, isLoggedIn: false };
    localStorage.removeItem('sd_auth');
}

// ---- Fetch Wrapper ----
async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const headers = { 'Content-Type': 'application/json', ...options.headers };

    if (authState.accessToken) {
        headers['Authorization'] = `Bearer ${authState.accessToken}`;
    }

    try {
        const response = await fetch(url, { ...options, headers });
        const data = await response.json();

        if (!response.ok) {
            // Try refresh token on 401
            if (response.status === 401 && authState.refreshToken) {
                const refreshed = await refreshAccessToken();
                if (refreshed) {
                    headers['Authorization'] = `Bearer ${authState.accessToken}`;
                    const retryResponse = await fetch(url, { ...options, headers });
                    return await retryResponse.json();
                }
            }
            throw new Error(data.error || data.errors?.[0]?.msg || 'Terjadi kesalahan');
        }

        return data;
    } catch (error) {
        if (error.message === 'Failed to fetch') {
            throw new Error('Server tidak tersedia. Pastikan backend berjalan.');
        }
        throw error;
    }
}

async function refreshAccessToken() {
    try {
        const res = await fetch(`${API_BASE}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: authState.refreshToken })
        });
        if (res.ok) {
            const data = await res.json();
            authState.accessToken = data.accessToken;
            authState.refreshToken = data.refreshToken;
            saveAuth();
            return true;
        }
    } catch (e) {}
    clearAuth();
    return false;
}

// ---- API Functions ----

const API = {
    // Auth
    async login(email, password) {
        const data = await apiRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        authState = {
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            isLoggedIn: true
        };
        saveAuth();
        return data;
    },

    async register(formData) {
        const data = await apiRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        authState = {
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            isLoggedIn: true
        };
        saveAuth();
        return data;
    },

    async getMe() {
        return await apiRequest('/auth/me');
    },

    logout() {
        clearAuth();
    },

    // Workshops
    async getWorkshops(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/workshops${query ? '?' + query : ''}`);
    },

    async searchWorkshops(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/workshops/search${query ? '?' + query : ''}`);
    },

    async getWorkshop(id) {
        return await apiRequest(`/workshops/${id}`);
    },

    async getWorkshopServices(id) {
        return await apiRequest(`/workshops/${id}/services`);
    },

    // Bookings
    async createBooking(bookingData) {
        return await apiRequest('/bookings', {
            method: 'POST',
            body: JSON.stringify(bookingData)
        });
    },

    async getBookings(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/bookings${query ? '?' + query : ''}`);
    },

    async getBooking(id) {
        return await apiRequest(`/bookings/${id}`);
    },

    async updateBookingStatus(id, status) {
        return await apiRequest(`/bookings/${id}/status`, {
            method: 'PUT',
            body: JSON.stringify({ status })
        });
    },

    async cancelBooking(id) {
        return await apiRequest(`/bookings/${id}`, { method: 'DELETE' });
    },

    // Reviews
    async getReviews(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/reviews${query ? '?' + query : ''}`);
    },

    async createReview(reviewData) {
        return await apiRequest('/reviews', {
            method: 'POST',
            body: JSON.stringify(reviewData)
        });
    },

    // Categories
    async getCategories() {
        return await apiRequest('/categories');
    },

    async getCategoryWorkshops(slug) {
        return await apiRequest(`/categories/${slug}`);
    },

    // Users
    async getProfile() {
        return await apiRequest('/users/profile');
    },

    async updateProfile(data) {
        return await apiRequest('/users/profile', {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },

    async getVehicles() {
        return await apiRequest('/users/vehicles');
    },

    async addVehicle(vehicleData) {
        return await apiRequest('/users/vehicles', {
            method: 'POST',
            body: JSON.stringify(vehicleData)
        });
    },

    async getNotifications() {
        return await apiRequest('/users/notifications');
    },

    async markNotificationsRead() {
        return await apiRequest('/users/notifications/read', { method: 'PUT' });
    },

    // Admin
    async getAdminStats() {
        return await apiRequest('/admin/stats');
    },

    async getAdminUsers(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/admin/users${query ? '?' + query : ''}`);
    },

    async getAdminWorkshops(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/admin/workshops${query ? '?' + query : ''}`);
    },

    async verifyWorkshop(id, verified) {
        return await apiRequest(`/admin/workshops/${id}/verify`, {
            method: 'PUT',
            body: JSON.stringify({ is_verified: verified })
        });
    },

    async getAdminReviews(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/admin/reviews${query ? '?' + query : ''}`);
    },

    async deleteReview(id) {
        return await apiRequest(`/admin/reviews/${id}`, { method: 'DELETE' });
    }
};

// Initialize auth on load
restoreAuth();
