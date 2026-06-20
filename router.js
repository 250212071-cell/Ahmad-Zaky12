/* ==========================================
   SAUDARA DEKAT — CLIENT-SIDE ROUTER
   ========================================== */

let currentPage = 'beranda';
let leafletMap = null;

function navigateTo(page, params = {}) {
    currentPage = page;
    
    // Update active nav items
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.page === page);
    });
    document.querySelectorAll('.mobile-nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.page === page);
    });

    // Update page title
    const titles = {
        'beranda': 'Selamat Datang, rakan!',
        'cari-bengkel': 'Cari Bengkel',
        'kategori': 'Kategori Bengkel',
        'booking': 'Booking Servis',
        'ulasan': 'Ulasan & Rating',
        'akun': 'Akun Saya',
        'detail-bengkel': params.name || 'Detail Bengkel',
        'login': 'Masuk',
        'register': 'Daftar',
        'dashboard-owner': 'Dashboard Pemilik Bengkel',
        'dashboard-admin': 'Admin Panel'
    };
    document.getElementById('pageTitle').textContent = titles[page] || 'Saudara Dekat';

    // Close sidebar on mobile
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }

    // Close notifications
    document.getElementById('notificationDropdown').classList.remove('show');

    // Destroy old map if exists
    if (leafletMap) {
        leafletMap.remove();
        leafletMap = null;
    }

    // Render the page
    const content = document.getElementById('pageContent');
    content.style.opacity = '0';
    content.style.transform = 'translateY(10px)';

    setTimeout(() => {
        switch(page) {
            case 'beranda':
                content.innerHTML = renderHomePage();
                break;
            case 'cari-bengkel':
                content.innerHTML = renderSearchPage();
                break;
            case 'kategori':
                content.innerHTML = renderCategoryPage();
                break;
            case 'booking':
                content.innerHTML = renderBookingPage();
                break;
            case 'ulasan':
                content.innerHTML = renderReviewsPage();
                break;
            case 'akun':
                content.innerHTML = renderAccountPage();
                break;
            case 'detail-bengkel':
                content.innerHTML = renderWorkshopDetailPage(params.id);
                break;
            case 'login':
                content.innerHTML = renderLoginPage();
                break;
            case 'register':
                content.innerHTML = renderRegisterPage();
                break;
            case 'dashboard-owner':
                content.innerHTML = renderOwnerDashboard();
                break;
            case 'dashboard-admin':
                content.innerHTML = renderAdminDashboard();
                break;
            default:
                content.innerHTML = renderHomePage();
        }

        // Re-init icons
        if (window.lucide) {
            lucide.createIcons();
        }

        // Init map if on search page
        if (page === 'cari-bengkel') {
            setTimeout(initMap, 100);
        }
        if (page === 'detail-bengkel') {
            setTimeout(() => initDetailMap(params.id), 100);
        }

        // Init hero slider on home page
        if (page === 'beranda' || page === 'default') {
            setTimeout(initSlider, 100);
        }

        // Animate revenue chart
        if (page === 'dashboard-owner') {
            setTimeout(animateChart, 200);
        }

        // Animate rating bars
        if (page === 'ulasan') {
            setTimeout(animateRatingBars, 200);
        }

        // Animate counters
        setTimeout(animateCounters, 100);

        content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 50);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function toggleNotifications() {
    document.getElementById('notificationDropdown').classList.toggle('show');
}

function markAllRead() {
    document.querySelectorAll('.notif-item').forEach(el => el.classList.remove('unread'));
    const badge = document.querySelector('.notification-badge');
    if (badge) badge.style.display = 'none';
    showToast('success', 'Notifikasi', 'Semua notifikasi telah ditandai dibaca');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
}

function openModal(title, bodyHtml, footerHtml = '') {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = bodyHtml;
    document.getElementById('modalFooter').innerHTML = footerHtml;
    document.getElementById('modalOverlay').classList.add('show');
    if (window.lucide) lucide.createIcons();
}

function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    const icons = {
        success: 'check-circle',
        error: 'x-circle',
        warning: 'alert-triangle',
        info: 'info'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon"><i data-lucide="${icons[type]}"></i></div>
        <div class="toast-text">
            <strong>${title}</strong>
            <span>${message}</span>
        </div>
        <button class="toast-dismiss" onclick="this.parentElement.remove()"><i data-lucide="x"></i></button>
    `;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function handleGlobalSearch(event) {
    if (event.key === 'Enter') {
        navigateTo('cari-bengkel');
    }
}

function initMap() {
    const mapEl = document.getElementById('workshopMap');
    if (!mapEl) return;

    try {
        leafletMap = L.map('workshopMap').setView([5.5483, 95.3238], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(leafletMap);

        APP_DATA.workshops.forEach(w => {
            const marker = L.marker([w.lat, w.lng]).addTo(leafletMap);
            marker.bindPopup(`
                <div style="min-width:180px;">
                    <strong>${w.name}</strong><br>
                    <small>${w.address}</small><br>
                    <span style="color:#ff6b35;">⭐ ${w.rating}</span> · ${w.distance} km<br>
                    <a href="#" onclick="event.preventDefault(); navigateTo('detail-bengkel', {id: ${w.id}, name: '${w.name}'})" style="color:#ff6b35; font-weight:600;">Lihat Detail →</a>
                </div>
            `);
        });
    } catch(e) {
        mapEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-tertiary);"><p>Peta tidak tersedia dalam mode offline</p></div>';
    }
}

function initDetailMap(workshopId) {
    const mapEl = document.getElementById('detailMap');
    if (!mapEl) return;
    
    const w = APP_DATA.workshops.find(w => w.id === workshopId);
    if (!w) return;

    try {
        const detailMap = L.map('detailMap').setView([w.lat, w.lng], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(detailMap);
        L.marker([w.lat, w.lng]).addTo(detailMap).bindPopup(w.name).openPopup();
    } catch(e) {
        mapEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-tertiary);"><p>Peta offline</p></div>';
    }
}

function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = el.dataset.count;
        if (target.includes('+') || target.includes('Rp') || target.includes('/') || target.includes('%')) {
            el.textContent = target;
            return;
        }
        const num = parseFloat(target);
        if (isNaN(num)) {
            el.textContent = target;
            return;
        }
        let current = 0;
        const duration = 1500;
        const step = num / (duration / 16);
        const timer = setInterval(() => {
            current += step;
            if (current >= num) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = num >= 100 ? Math.floor(current) : current.toFixed(1);
            }
        }, 16);
    });
}

function animateChart() {
    document.querySelectorAll('.chart-bar').forEach((bar, i) => {
        const h = bar.dataset.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = h + '%';
        }, i * 100 + 100);
    });
}

function animateRatingBars() {
    document.querySelectorAll('.bar-fill').forEach((bar) => {
        const w = bar.dataset.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = w + '%';
        }, 200);
    });
}
