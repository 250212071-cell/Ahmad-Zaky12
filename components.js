/* ==========================================
   SAUDARA DEKAT — REUSABLE COMPONENTS (JS)
   Clean, Minimal Style
   ========================================== */

function renderStars(rating, size = 14) {
    let stars = '';
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= full) {
            stars += `<span class="star filled" style="font-size:${size}px;">★</span>`;
        } else if (i === full + 1 && half) {
            stars += `<span class="star filled" style="font-size:${size}px;">★</span>`;
        } else {
            stars += `<span class="star" style="font-size:${size}px;">★</span>`;
        }
    }
    return stars;
}

function renderBadge(type, text) {
    return `<span class="badge badge-${type} badge-dot">${text}</span>`;
}

function renderStatusBadge(status) {
    const map = {
        completed: { cls: 'status-completed', text: 'Selesai' },
        pending: { cls: 'status-pending', text: 'Menunggu' },
        confirmed: { cls: 'status-confirmed', text: 'Dikonfirmasi' },
        in_progress: { cls: 'status-progress', text: 'Dalam Proses' },
        cancelled: { cls: 'status-cancelled', text: 'Dibatalkan' }
    };
    const s = map[status] || { cls: 'status-pending', text: status };
    return `<span class="status-badge ${s.cls}">${s.text}</span>`;
}

function renderWorkshopCard(workshop) {
    return `
        <div class="workshop-card animate-fadeInUp" onclick="navigateTo('detail-bengkel', {id: ${workshop.id}, name: '${workshop.name}'})">
            <div class="workshop-card-img">
                <span>[ Foto ]</span>
            </div>
            <div class="workshop-card-body">
                <h3>${workshop.name}</h3>
                <p class="address">${workshop.address}</p>
                <div class="workshop-card-footer">
                    <span class="rating-number">${workshop.rating}</span>
                    <span class="detail-link">Lihat Detail</span>
                </div>
            </div>
        </div>
    `;
}

function renderWorkshopListCard(workshop) {
    return `
        <div class="workshop-list-card" onclick="navigateTo('detail-bengkel', {id: ${workshop.id}, name: '${workshop.name}'})">
            <div class="list-card-img">
                <span style="font-size:var(--text-xs);color:var(--text-tertiary);">[ Foto ]</span>
            </div>
            <div class="list-card-info">
                <h3>${workshop.name}</h3>
                <p class="address">
                    <i data-lucide="map-pin"></i>
                    ${workshop.address}, ${workshop.city}
                </p>
                <div class="list-card-meta">
                    <span class="rating-number">${workshop.rating}</span>
                    <span class="star-rating">${renderStars(workshop.rating, 12)}</span>
                    ${workshop.isOpen 
                        ? renderBadge('success', 'Buka') 
                        : renderBadge('danger', 'Tutup')}
                </div>
                <div class="list-card-categories">
                    ${workshop.categories.map(c => `<span>${c}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderReviewCard(review) {
    return `
        <div class="review-card animate-fadeInUp">
            <div class="review-header">
                <div class="review-author">
                    <div class="avatar avatar-sm">${review.userAvatar}</div>
                    <div class="review-author-info">
                        <h4>${review.userName}</h4>
                        <span>${review.date}</span>
                    </div>
                </div>
                <div class="review-meta">
                    <span class="rating-number">${review.rating}</span>
                    <span class="review-meta workshop-name">${review.workshopName}</span>
                </div>
            </div>
            <div class="star-rating" style="margin-bottom:var(--space-3);">
                ${renderStars(review.rating, 14)}
            </div>
            <p class="review-text">${review.comment}</p>
        </div>
    `;
}

function getAvatarColor(initials) {
    return '#000000';
}

function renderBookingHistoryItem(booking) {
    return `
        <div class="history-item">
            <div class="history-info">
                <strong>${booking.workshopName}</strong> — ${booking.service}
                <div class="history-date">${booking.date} · ${booking.time}</div>
            </div>
            ${renderStatusBadge(booking.status)}
        </div>
    `;
}

function renderCategoryCard(cat, index) {
    return `
        <div class="category-card animate-fadeInUp stagger-${(index % 4) + 1}" onclick="navigateTo('cari-bengkel')">
            <div class="category-icon">
                <i data-lucide="${cat.icon}"></i>
            </div>
            <div class="category-info">
                <h3>${cat.name}</h3>
                <p>${cat.count} bengkel</p>
            </div>
        </div>
    `;
}

function showBookingDetail(bookingId) {
    const booking = APP_DATA.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    openModal('Detail Booking #' + booking.id, `
        <div style="display:flex;flex-direction:column;gap:var(--space-4);">
            <div class="info-row">
                <div class="info-label">Bengkel</div>
                <div class="info-value">${booking.workshopName}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Layanan</div>
                <div class="info-value">${booking.service}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Kendaraan</div>
                <div class="info-value">${booking.vehicle}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Tanggal & Waktu</div>
                <div class="info-value">${booking.date} · ${booking.time}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Status</div>
                <div class="info-value">${renderStatusBadge(booking.status)}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Catatan</div>
                <div class="info-value">${booking.notes || '-'}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Total</div>
                <div class="info-value" style="font-weight:700;font-size:var(--text-lg);">${booking.total}</div>
            </div>
        </div>
    `, `<button class="btn btn-primary" onclick="closeModal()">Tutup</button>`);
}
