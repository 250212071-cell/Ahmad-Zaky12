/* ==========================================
   SAUDARA DEKAT — APP INITIALIZATION
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Navigate to home page
    navigateTo('beranda');

    // Close notification dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('notificationDropdown');
        const btn = document.querySelector('.notification-btn');
        if (dropdown && !dropdown.contains(e.target) && !btn.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('menuToggle');
        if (sidebar && sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && 
            toggle && !toggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Keyboard shortcut: Escape to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.getElementById('notificationDropdown').classList.remove('show');
            document.getElementById('sidebar').classList.remove('open');
        }
    });

    // Set today's date as minimum for booking date
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        dateInput.min = today;
    }

    console.log('%c🔧 Saudara Dekat — Workshop Management Platform', 'font-size:16px;font-weight:bold;color:#ff6b35;');
    console.log('%cPowered by Antigravity', 'font-size:12px;color:#a0a0b8;');
});
