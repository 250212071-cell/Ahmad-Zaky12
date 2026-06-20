/* ==========================================
   SAUDARA DEKAT — DASHBOARD RENDERERS
   Owner Dashboard & Admin Dashboard
   ========================================== */

// ============= OWNER DASHBOARD =============
function renderOwnerDashboard() {
    const d = APP_DATA.ownerDashboard;
    const maxRevenue = Math.max(...d.revenueData.map(r => r.amount));

    return `
        <!-- Stats Grid -->
        <div class="dashboard-stats">
            <div class="dash-stat-card animate-fadeInUp stagger-1">
                <div class="dash-stat-icon"><i data-lucide="calendar-check"></i></div>
                <div class="dash-stat-info">
                    <h4>${d.stats.totalBookings}</h4>
                    <p>Total Booking</p>
                    <span class="trend trend-up">+12%</span>
                </div>
            </div>
            <div class="dash-stat-card animate-fadeInUp stagger-2">
                <div class="dash-stat-icon"><i data-lucide="clock"></i></div>
                <div class="dash-stat-info">
                    <h4>${d.stats.activeBookings}</h4>
                    <p>Booking Aktif</p>
                    <span class="trend trend-up">3 baru</span>
                </div>
            </div>
            <div class="dash-stat-card animate-fadeInUp stagger-3">
                <div class="dash-stat-icon"><i data-lucide="wallet"></i></div>
                <div class="dash-stat-info">
                    <h4>${d.stats.revenue}</h4>
                    <p>Pendapatan Bulan Ini</p>
                    <span class="trend trend-up">+8.5%</span>
                </div>
            </div>
            <div class="dash-stat-card animate-fadeInUp stagger-4">
                <div class="dash-stat-icon"><i data-lucide="star"></i></div>
                <div class="dash-stat-info">
                    <h4>${d.stats.avgRating}</h4>
                    <p>Rating Rata-rata</p>
                    <span class="trend trend-up">+0.2</span>
                </div>
            </div>
        </div>

        <!-- Content Grid -->
        <div class="dashboard-content">
            <div>
                <!-- Revenue Chart -->
                <div class="dash-card" style="margin-bottom:var(--space-5);">
                    <div class="dash-card-header">
                        <h3>Pendapatan 6 Bulan Terakhir</h3>
                        <span class="badge badge-success badge-dot">+8.5%</span>
                    </div>
                    <div class="dash-card-body">
                        <div class="chart-placeholder">
                                ${d.revenueData.map(r => `
                                    <div class="chart-bar" style="height:${(r.amount / maxRevenue * 160)}px;position:relative;">
                                        <div class="chart-bar-inner" style="height:100%;"></div>
                                        <span class="chart-bar-label">${r.month}</span>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Booking Queue -->
                <div class="dash-card">
                    <div class="dash-card-header">
                        <h3>Antrian Booking</h3>
                        <span class="badge badge-warning badge-dot">${d.pendingBookings.length} menunggu</span>
                    </div>
                    <div class="dash-card-body">
                        ${d.pendingBookings.map(b => `
                            <div class="dash-booking-item">
                                <div class="avatar avatar-sm">${b.customer.substring(0,2).toUpperCase()}</div>
                                <div class="dash-booking-info">
                                    <h4>${b.customer}</h4>
                                    <p>${b.service} · ${b.date}, ${b.time}</p>
                                </div>
                                <div class="dash-booking-actions">
                                    <button class="btn btn-sm btn-primary" onclick="showToast('success','Booking','Booking #${b.id} telah dikonfirmasi!')">Konfirmasi</button>
                                    <button class="btn btn-sm btn-outline" onclick="showToast('warning','Booking','Booking #${b.id} telah ditolak')">Tolak</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div>
                <!-- Weekly Schedule -->
                <div class="dashboard-card" style="margin-bottom:var(--space-5);">
                    <div class="dashboard-card-header">
                        <h3><i data-lucide="calendar" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Jadwal Minggu Ini</h3>
                    </div>
                    <div class="dashboard-card-body">
                        <div class="schedule-grid">
                            ${d.weeklySchedule.map((s, i) => `
                                <div class="schedule-day ${i === 2 ? 'active' : ''}">
                                    <span class="day-name">${s.day}</span>
                                    <span class="day-count">${s.count}</span>
                                    <span class="day-label">booking</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="dashboard-card" style="margin-bottom:var(--space-5);">
                    <div class="dashboard-card-header">
                        <h3><i data-lucide="gauge" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Ringkasan</h3>
                    </div>
                    <div class="quick-stats">
                        <div class="quick-stat">
                            <span class="q-value">${d.stats.totalCustomers}</span>
                            <span class="q-label">Pelanggan</span>
                        </div>
                        <div class="quick-stat">
                            <span class="q-value">${d.stats.completionRate}</span>
                            <span class="q-label">Selesai</span>
                        </div>
                        <div class="quick-stat">
                            <span class="q-value">6</span>
                            <span class="q-label">Layanan</span>
                        </div>
                        <div class="quick-stat">
                            <span class="q-value">4.8</span>
                            <span class="q-label">Rating</span>
                        </div>
                    </div>
                </div>

                <!-- Activity Feed -->
                <div class="dashboard-card">
                    <div class="dashboard-card-header">
                        <h3><i data-lucide="activity" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Aktivitas Terbaru</h3>
                    </div>
                    <div class="activity-feed">
                        ${d.activities.map(a => `
                            <div class="activity-item">
                                <div class="activity-dot ${a.type}"></div>
                                <div class="activity-text">${a.text}</div>
                                <div class="activity-time">${a.time}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}


// ============= ADMIN DASHBOARD =============
function renderAdminDashboard() {
    const d = APP_DATA.adminDashboard;

    return `
        <!-- Stats Grid -->
        <div class="admin-grid">
            <div class="stat-card animate-fadeInUp stagger-1">
                <div class="stat-icon blue"><i data-lucide="users"></i></div>
                <div class="stat-value" data-count="${d.stats.totalUsers}">${d.stats.totalUsers}</div>
                <div class="stat-label">Total Pengguna</div>
                <div class="stat-change up"><i data-lucide="trending-up" style="width:12px;height:12px;"></i> +156 bulan ini</div>
            </div>
            <div class="stat-card animate-fadeInUp stagger-2">
                <div class="stat-icon orange"><i data-lucide="wrench"></i></div>
                <div class="stat-value" data-count="${d.stats.totalWorkshops}">${d.stats.totalWorkshops}</div>
                <div class="stat-label">Total Bengkel</div>
                <div class="stat-change up"><i data-lucide="trending-up" style="width:12px;height:12px;"></i> +23 bulan ini</div>
            </div>
            <div class="stat-card animate-fadeInUp stagger-3">
                <div class="stat-icon green"><i data-lucide="calendar-check"></i></div>
                <div class="stat-value" data-count="${d.stats.totalBookings}">${d.stats.totalBookings}</div>
                <div class="stat-label">Total Booking</div>
                <div class="stat-change up"><i data-lucide="trending-up" style="width:12px;height:12px;"></i> +412 bulan ini</div>
            </div>
            <div class="stat-card animate-fadeInUp stagger-4">
                <div class="stat-icon amber"><i data-lucide="wallet"></i></div>
                <div class="stat-value" style="font-size:var(--text-xl);">${d.stats.monthlyRevenue}</div>
                <div class="stat-label">Pendapatan Platform</div>
                <div class="stat-change up"><i data-lucide="trending-up" style="width:12px;height:12px;"></i> +15.2%</div>
            </div>
        </div>

        <!-- Content Grid -->
        <div class="admin-content">
            <!-- Left Column -->
            <div>
                <!-- Verification Queue -->
                <div class="dashboard-card" style="margin-bottom:var(--space-5);">
                    <div class="dashboard-card-header">
                        <h3><i data-lucide="shield-check" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Verifikasi Bengkel</h3>
                        <span class="badge badge-warning badge-dot">${d.pendingVerifications.length} menunggu</span>
                    </div>
                    <div>
                        ${d.pendingVerifications.map(v => `
                            <div class="verification-item">
                                <div class="avatar avatar-sm">
                                    ${v.name.substring(0,2).toUpperCase()}
                                </div>
                                <div class="verification-info">
                                    <h4>${v.name}</h4>
                                    <p>${v.owner} · ${v.location} · ${v.date}</p>
                                </div>
                                <div class="verification-actions">
                                    <button class="btn btn-sm btn-success btn-pill" onclick="showToast('success','Verifikasi','${v.name} telah diverifikasi!')">
                                        <i data-lucide="check" style="width:14px;height:14px;"></i> Setuju
                                    </button>
                                    <button class="btn btn-sm btn-danger btn-pill" onclick="showToast('warning','Verifikasi','${v.name} ditolak')">
                                        <i data-lucide="x" style="width:14px;height:14px;"></i> Tolak
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- User Management -->
                <div class="dashboard-card">
                    <div class="dashboard-card-header">
                        <h3><i data-lucide="users" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Pengguna Terbaru</h3>
                        <button class="btn btn-sm btn-ghost">Lihat Semua</button>
                    </div>
                    <div>
                        ${d.recentUsers.map(u => `
                            <div class="user-row">
                                <div class="avatar avatar-sm">
                                    ${u.name.substring(0,2).toUpperCase()}
                                </div>
                                <div class="user-row-info">
                                    <h4>${u.name}</h4>
                                    <p>${u.email} · Bergabung ${u.date}</p>
                                </div>
                                ${u.role === 'workshop_owner' 
                                    ? '<span class="badge badge-primary">Pemilik Bengkel</span>' 
                                    : '<span class="badge badge-neutral">Pelanggan</span>'}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div>
                <!-- Review Moderation -->
                <div class="dashboard-card" style="margin-bottom:var(--space-5);">
                    <div class="dashboard-card-header">
                        <h3><i data-lucide="flag" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--danger);"></i>Moderasi Ulasan</h3>
                        <span class="badge badge-danger badge-dot">${d.flaggedReviews.length} dilaporkan</span>
                    </div>
                    <div>
                        ${d.flaggedReviews.map(r => `
                            <div class="moderation-item">
                                <div class="moderation-header">
                                    <div class="moderation-author">
                                        <div class="avatar avatar-xs">
                                            ${r.user.substring(0,2).toUpperCase()}
                                        </div>
                                        <h4>${r.user}</h4>
                                    </div>
                                    <div>
                                        ${r.rating >= 4 ? renderBadge('success', r.rating + ' ★') : renderBadge('danger', r.rating + ' ★')}
                                    </div>
                                </div>
                                <p class="moderation-text">"${r.text}"</p>
                                <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:var(--space-3);">${r.workshop} · ${r.date}</div>
                                <div class="moderation-actions">
                                    <button class="btn btn-sm btn-success btn-pill" onclick="showToast('success','Moderasi','Ulasan dipertahankan')">
                                        <i data-lucide="check" style="width:14px;height:14px;"></i> Pertahankan
                                    </button>
                                    <button class="btn btn-sm btn-danger btn-pill" onclick="showToast('warning','Moderasi','Ulasan telah dihapus')">
                                        <i data-lucide="trash-2" style="width:14px;height:14px;"></i> Hapus
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Platform Overview -->
                <div class="dashboard-card">
                    <div class="dashboard-card-header">
                        <h3><i data-lucide="pie-chart" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Ringkasan Platform</h3>
                    </div>
                    <div class="quick-stats">
                        <div class="quick-stat">
                            <span class="q-value" style="color:var(--success);">94%</span>
                            <span class="q-label">Booking Selesai</span>
                        </div>
                        <div class="quick-stat">
                            <span class="q-value" style="color:var(--primary);">4.7</span>
                            <span class="q-label">Avg Rating</span>
                        </div>
                        <div class="quick-stat">
                            <span class="q-value" style="color:var(--info);">92%</span>
                            <span class="q-label">Bengkel Aktif</span>
                        </div>
                        <div class="quick-stat">
                            <span class="q-value" style="color:var(--warning);">3.2</span>
                            <span class="q-label">Avg Respon (jam)</span>
                        </div>
                    </div>
                    <div style="padding:0 var(--space-4) var(--space-4);">
                        <div style="margin-bottom:var(--space-3);">
                            <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);margin-bottom:var(--space-1);">
                                <span style="color:var(--text-secondary);">Kapasitas Server</span>
                                <span style="color:var(--success);font-weight:600;">67%</span>
                            </div>
                            <div class="progress-bar"><div class="progress-fill" style="width:67%;"></div></div>
                        </div>
                        <div>
                            <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);margin-bottom:var(--space-1);">
                                <span style="color:var(--text-secondary);">Penyimpanan</span>
                                <span style="color:var(--warning);font-weight:600;">45%</span>
                            </div>
                            <div class="progress-bar"><div class="progress-fill" style="width:45%;"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
