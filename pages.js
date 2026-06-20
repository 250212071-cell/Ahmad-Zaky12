/* ==========================================
   SAUDARA DEKAT — PAGE RENDERERS
   ========================================== */
// ============= HOME PAGE =============
function renderHomePage() {
    const stats = APP_DATA.platformStats;
    const workshops = APP_DATA.workshops;
    const testimonials = APP_DATA.testimonials;

    return `
        <!-- Hero Carousel / Slider -->
        <section class="hero-slider" id="heroSlider">
            <button class="slider-arrow slider-arrow-left" onclick="slideHero(-1)">
                <i data-lucide="chevron-left"></i>
            </button>

            <div class="slider-track" id="sliderTrack">
                <!-- Slide 1 -->
                <div class="slider-slide active">
                    <div class="slide-content">
                        <h1>TEMUKAN BENGKEL<br>TERDEKAT & TERPERCAYA</h1>
                        <p>Cari, bandingkan, dan booking bengkel mobil & motor di sekitar Anda.</p>
                        <button class="btn btn-primary btn-lg btn-pill" onclick="navigateTo('cari-bengkel')">
                            Cari Bengkel
                        </button>
                    </div>
                </div>
                <!-- Slide 2 -->
                <div class="slider-slide">
                    <div class="slide-content">
                        <h1>BOOKING SERVIS<br>TANPA ANTRI</h1>
                        <p>Pesan jadwal servis langsung dari rumah. Cepat, mudah, dan terpercaya.</p>
                        <button class="btn btn-primary btn-lg btn-pill" onclick="navigateTo('booking')">
                            Booking Sekarang
                        </button>
                    </div>
                </div>
                <!-- Slide 3 -->
                <div class="slider-slide">
                    <div class="slide-content">
                        <h1>RATING & ULASAN<br>TRANSPARAN</h1>
                        <p>Baca ulasan jujur dari pengguna lain sebelum memilih bengkel.</p>
                        <button class="btn btn-primary btn-lg btn-pill" onclick="navigateTo('ulasan')">
                            Lihat Ulasan
                        </button>
                    </div>
                </div>
            </div>

            <button class="slider-arrow slider-arrow-right" onclick="slideHero(1)">
                <i data-lucide="chevron-right"></i>
            </button>

            <div class="slider-dots" id="sliderDots">
                <span class="dot active" onclick="goToSlide(0)"></span>
                <span class="dot" onclick="goToSlide(1)"></span>
                <span class="dot" onclick="goToSlide(2)"></span>
            </div>
        </section>

        <!-- Stats Bar -->
        <section class="stats-bar">
            <div class="stat-item animate-fadeInUp stagger-1">
                <span class="stat-number">${stats.workshops}</span>
                <span class="stat-text">Bengkel Terdaftar</span>
            </div>
            <div class="stat-item animate-fadeInUp stagger-2">
                <span class="stat-number">${stats.users}</span>
                <span class="stat-text">Pengguna Aktif</span>
            </div>
            <div class="stat-item animate-fadeInUp stagger-3">
                <span class="stat-number">${stats.rating}</span>
                <span class="stat-text">Rating Rata-rata</span>
            </div>
            <div class="stat-item animate-fadeInUp stagger-4">
                <span class="stat-number">${stats.availability}</span>
                <span class="stat-text">Layanan Online</span>
            </div>
        </section>

        <!-- Popular Workshops -->
        <section class="home-section">
            <div class="section-header">
                <div>
                    <h2 class="section-title-centered">Bengkel Populer</h2>
                </div>
                <a class="section-action" onclick="navigateTo('cari-bengkel')">
                    Lihat Semua <i data-lucide="arrow-right"></i>
                </a>
            </div>
            <div class="workshops-grid">
                ${workshops.map(w => renderWorkshopCard(w)).join('')}
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="home-section">
            <h2 class="section-title-centered">Kenapa Pilih Saudara Dekat?</h2>
            <div class="features-grid">
                <div class="feature-card animate-fadeInUp stagger-1">
                    <div class="feature-icon"><i data-lucide="map-pin"></i></div>
                    <h3>Mudah Dicari</h3>
                    <p>Temukan bengkel terdekat lewat peta interaktif</p>
                </div>
                <div class="feature-card animate-fadeInUp stagger-2">
                    <div class="feature-icon"><i data-lucide="star"></i></div>
                    <h3>Rating Jujur</h3>
                    <p>Ulasan asli dari pengguna lain</p>
                </div>
                <div class="feature-card animate-fadeInUp stagger-3">
                    <div class="feature-icon"><i data-lucide="calendar-check"></i></div>
                    <h3>Booking Online</h3>
                    <p>Pesan jadwal servis langsung dari rumah</p>
                </div>
                <div class="feature-card animate-fadeInUp stagger-4">
                    <div class="feature-icon"><i data-lucide="badge-check"></i></div>
                    <h3>100% Gratis</h3>
                    <p>Tanpa biaya pendaftaran apapun</p>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="home-section">
            <h2 class="section-title-centered">Apa Kata Mereka?</h2>
            <div class="testimonials-grid">
                ${testimonials.map((t, i) => `
                    <div class="testimonial-card animate-fadeInUp stagger-${i+1}">
                        <p class="testimonial-text">${t.text}</p>
                        <div class="testimonial-author">
                            <div class="avatar avatar-sm">${t.avatar}</div>
                            <div class="testimonial-info">
                                <h4>${t.name}</h4>
                                <p>${t.role}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- CTA Section (dark footer style) -->
        <section class="cta-section-dark animate-fadeInUp">
            <h2>Siap Merawat Kendaraan Anda?</h2>
            <p>Bergabung dengan ribuan pengguna yang telah mempercayai Saudara Dekat.</p>
            <button class="btn btn-lg btn-pill" onclick="navigateTo('register')" style="background:var(--white);color:var(--black);border:1px solid var(--white);">
                <i data-lucide="user-plus"></i> Daftar Sekarang — Gratis!
            </button>
        </section>
    `;
}

// ---- Hero Slider Logic ----
let currentSlide = 0;
let slideInterval = null;

function slideHero(dir) {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');

    currentSlide = (currentSlide + dir + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');

    resetSlideInterval();
}

function goToSlide(idx) {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');

    currentSlide = idx;

    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');

    resetSlideInterval();
}

function resetSlideInterval() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => slideHero(1), 5000);
}

function initSlider() {
    currentSlide = 0;
    resetSlideInterval();
}

// ============= SEARCH WORKSHOP PAGE =============
function renderSearchPage() {
    const workshops = APP_DATA.workshops;
    const cats = ['Semua', 'Mobil', 'Motor', 'Las & Ketok', 'Ban & Velg'];

    return `
        <!-- Search Bar -->
        <div class="search-bar-container">
            <input type="text" placeholder="Cari nama bengkel, lokasi, atau jenis layanan..." id="searchInput" oninput="filterWorkshops()">
            <button class="btn btn-primary" onclick="filterWorkshops()">
                <i data-lucide="search"></i> Cari
            </button>
        </div>

        <!-- Category Chips -->
        <div class="chip-group" style="margin-bottom:var(--space-5);">
            ${cats.map((c, i) => `
                <button class="chip ${i === 0 ? 'active' : ''}" onclick="filterCategory(this, '${c}')">${c}</button>
            `).join('')}
        </div>

        <!-- Map + List Layout -->
        <div class="search-page-layout">
            <div class="map-container">
                <div id="workshopMap" style="height:100%;min-height:500px;"></div>
            </div>
            <div class="workshop-list-container" id="workshopList">
                ${workshops.map(w => renderWorkshopListCard(w)).join('')}
            </div>
        </div>
    `;
}


// ============= CATEGORY PAGE =============
function renderCategoryPage() {
    return `
        <div class="section-header">
            <div>
                <h2 class="section-title">Kategori Bengkel</h2>
                <p class="section-subtitle">Pilih kategori sesuai kebutuhan kendaraan Anda</p>
            </div>
        </div>
        <div class="category-grid">
            ${APP_DATA.categories.map((cat, i) => renderCategoryCard(cat, i)).join('')}
        </div>
    `;
}


// ============= BOOKING PAGE =============
function renderBookingPage() {
    const bookings = APP_DATA.bookings;

    return `
        <div class="booking-layout">
            <!-- Booking Form -->
            <div class="booking-form-card animate-fadeInLeft">
                <h2><i data-lucide="calendar-check" style="width:24px;height:24px;display:inline;vertical-align:middle;margin-right:8px;color:var(--primary);"></i>Form Booking Servis</h2>
                <form onsubmit="handleBooking(event)">
                    <div class="form-group">
                        <label class="form-label">Pilih Bengkel</label>
                        <select id="bookingWorkshop" onchange="updateSummary()">
                            <option value="">-- Pilih Bengkel --</option>
                            ${APP_DATA.workshops.map(w => `<option value="${w.id}">${w.name} — ${w.address}</option>`).join('')}
                        </select>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">
                        <div class="form-group">
                            <label class="form-label">Jenis Kendaraan</label>
                            <select id="bookingVehicle" onchange="updateSummary()">
                                <option value="">-- Pilih --</option>
                                <option value="Motor">Motor</option>
                                <option value="Mobil">Mobil</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Plat Nomor</label>
                            <input type="text" placeholder="Contoh: BL 1234 AB" id="bookingPlate" oninput="updateSummary()" maxlength="12">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Jenis Layanan</label>
                        <select id="bookingService" onchange="updateSummary()">
                            <option value="">-- Pilih Layanan --</option>
                            <option value="Servis Rutin">Servis Rutin</option>
                            <option value="Ganti Oli">Ganti Oli</option>
                            <option value="Tune Up">Tune Up</option>
                            <option value="Servis AC">Servis AC</option>
                            <option value="Ganti Ban">Ganti Ban</option>
                            <option value="Perbaikan Mesin">Perbaikan Mesin</option>
                            <option value="Lainnya">Lainnya</option>
                        </select>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">
                        <div class="form-group">
                            <label class="form-label">Tanggal</label>
                            <input type="date" id="bookingDate" onchange="updateSummary()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Jam</label>
                            <select id="bookingTime" onchange="updateSummary()">
                                <option value="">-- Pilih Jam --</option>
                                <option>08:00</option>
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>13:00</option>
                                <option>14:00</option>
                                <option>15:00</option>
                                <option>16:00</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Catatan Tambahan</label>
                        <textarea placeholder="Tuliskan keluhan atau catatan khusus..." id="bookingNotes" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">
                        <i data-lucide="check-circle"></i> Booking Sekarang
                    </button>
                </form>
            </div>

            <!-- Sidebar -->
            <div class="booking-sidebar animate-fadeInRight">
                <!-- Summary -->
                <div class="booking-summary-card">
                    <h3><i data-lucide="clipboard-list" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Ringkasan Booking</h3>
                    <div id="bookingSummary">
                        <div class="summary-row"><span class="label">Bengkel</span><span class="value" id="sumWorkshop">—</span></div>
                        <div class="summary-row"><span class="label">Kendaraan</span><span class="value" id="sumVehicle">—</span></div>
                        <div class="summary-row"><span class="label">Plat</span><span class="value" id="sumPlate">—</span></div>
                        <div class="summary-row"><span class="label">Layanan</span><span class="value" id="sumService">—</span></div>
                        <div class="summary-row"><span class="label">Tanggal</span><span class="value" id="sumDate">—</span></div>
                        <div class="summary-row"><span class="label">Jam</span><span class="value" id="sumTime">—</span></div>
                    </div>
                </div>

                <!-- History -->
                <div class="booking-history-card">
                    <h3><i data-lucide="history" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Riwayat Booking</h3>
                    ${bookings.map(b => renderBookingHistoryItem(b)).join('')}
                </div>
            </div>
        </div>
    `;
}


// ============= REVIEWS PAGE =============
function renderReviewsPage() {
    const dist = APP_DATA.ratingDistribution;
    const reviews = APP_DATA.reviews;
    const filters = ['Semua', 'Terbaru', 'Rating Tertinggi', 'Rating Terendah'];

    return `
        <!-- Rating Overview -->
        <div class="reviews-header animate-fadeIn">
            <div class="rating-big">
                <div class="number">${dist.average}</div>
                <div class="star-rating" style="justify-content:center;margin:var(--space-2) 0;">
                    ${renderStars(dist.average, 18)}
                </div>
                <div class="subtitle">dari 5.0</div>
            </div>
            <div class="rating-bars">
                <div class="rating-bar-row">
                    <span class="star-num">5</span>
                    <span style="color:var(--accent-gold);font-size:12px;">★</span>
                    <div class="bar"><div class="bar-fill" data-width="${dist.five}" style="width:0;"></div></div>
                    <span class="bar-pct">${dist.five}%</span>
                </div>
                <div class="rating-bar-row">
                    <span class="star-num">4</span>
                    <span style="color:var(--accent-gold);font-size:12px;">★</span>
                    <div class="bar"><div class="bar-fill" data-width="${dist.four}" style="width:0;"></div></div>
                    <span class="bar-pct">${dist.four}%</span>
                </div>
                <div class="rating-bar-row">
                    <span class="star-num">3</span>
                    <span style="color:var(--accent-gold);font-size:12px;">★</span>
                    <div class="bar"><div class="bar-fill" data-width="${dist.three}" style="width:0;"></div></div>
                    <span class="bar-pct">${dist.three}%</span>
                </div>
                <div class="rating-bar-row">
                    <span class="star-num">2</span>
                    <span style="color:var(--accent-gold);font-size:12px;">★</span>
                    <div class="bar"><div class="bar-fill" data-width="${dist.two}" style="width:0;"></div></div>
                    <span class="bar-pct">${dist.two}%</span>
                </div>
                <div class="rating-bar-row">
                    <span class="star-num">1</span>
                    <span style="color:var(--accent-gold);font-size:12px;">★</span>
                    <div class="bar"><div class="bar-fill" data-width="${dist.one}" style="width:0;"></div></div>
                    <span class="bar-pct">${dist.one}%</span>
                </div>
            </div>
            <div class="rating-total">
                <div class="count">${dist.total.toLocaleString()}</div>
                <div class="label">ulasan</div>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="tabs" style="margin-bottom:var(--space-6);">
            ${filters.map((f, i) => `
                <button class="tab ${i === 0 ? 'active' : ''}" onclick="filterReviews(this)">${f}</button>
            `).join('')}
        </div>

        <!-- Reviews List -->
        <div class="reviews-list" id="reviewsList">
            ${reviews.map(r => renderReviewCard(r)).join('')}
        </div>
    `;
}


// ============= USER ACCOUNT PAGE =============
function renderAccountPage() {
    const user = APP_DATA.currentUser;
    const bookings = APP_DATA.bookings;

    return `
        <div class="account-layout">
            <!-- Profile Card -->
            <div class="account-profile-card animate-fadeInLeft">
                <div class="avatar avatar-2xl">${user.avatar}</div>
                <h2>${user.name}</h2>
                <p class="email">${user.email}</p>
                <div style="display:flex;gap:var(--space-3);justify-content:center;">
                    <button class="btn btn-primary btn-pill" onclick="showToast('info','Profil','Fitur edit profil akan segera hadir!')">
                        <i data-lucide="edit-3"></i> Edit Profil
                    </button>
                    <button class="btn btn-secondary btn-pill" onclick="handleLogout()">
                        <i data-lucide="log-out"></i> Keluar
                    </button>
                </div>
            </div>

            <!-- Account Info -->
            <div class="account-info-card animate-fadeInRight">
                <h3><i data-lucide="info" style="width:18px;height:18px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Informasi Akun</h3>
                <div class="info-row">
                    <div class="info-label">Nama Lengkap</div>
                    <div class="info-value">${user.name}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">No. Telepon</div>
                    <div class="info-value">${user.phone}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Alamat</div>
                    <div class="info-value">${user.address}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Kendaraan</div>
                    <div class="info-value">${user.vehicle.brand} ${user.vehicle.model} (${user.vehicle.year}) — ${user.vehicle.plate}</div>
                </div>
            </div>

            <!-- Booking History -->
            <div class="booking-history-card animate-fadeInUp">
                <h3><i data-lucide="clock" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Riwayat Booking Saya</h3>
                ${bookings.map(b => `
                    <div class="history-item" style="cursor:pointer;" onclick="showBookingDetail(${b.id})">
                        <div class="history-info">
                            <strong>${b.workshopName}</strong> — ${b.service}
                            <div class="history-date">${b.date}</div>
                        </div>
                        ${renderStatusBadge(b.status)}
                    </div>
                `).join('')}
            </div>

            <!-- Stats -->
            <div class="account-stats-card animate-fadeInUp">
                <h3><i data-lucide="bar-chart-3" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;color:var(--primary);"></i>Statistik Saya</h3>
                <div class="account-stat-item">
                    <span class="stat-label">Total Booking</span>
                    <span class="stat-value">${user.stats.totalBookings}</span>
                </div>
                <div class="account-stat-item">
                    <span class="stat-label">Bengkel Favorit</span>
                    <span class="stat-value">${user.stats.favoriteWorkshop}</span>
                </div>
                <div class="account-stat-item">
                    <span class="stat-label">Ulasan Ditulis</span>
                    <span class="stat-value">${user.stats.reviewsWritten}</span>
                </div>
                <div class="account-stat-item">
                    <span class="stat-label">Bergabung Sejak</span>
                    <span class="stat-value">${user.stats.joinedSince}</span>
                </div>
            </div>
        </div>
    `;
}


// ============= WORKSHOP DETAIL PAGE =============
function renderWorkshopDetailPage(workshopId) {
    const w = APP_DATA.workshops.find(ws => ws.id === workshopId);
    if (!w) return '<div class="empty-state"><h3>Bengkel tidak ditemukan</h3></div>';

    const reviews = APP_DATA.reviews.filter(r => r.workshopId === workshopId);
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
    const dayMap = { Minggu: 'Minggu', Senin: 'Senin', Selasa: 'Selasa', Rabu: 'Rabu', Kamis: 'Kamis', Jumat: 'Jumat', Sabtu: 'Sabtu' };

    return `
        <!-- Header -->
        <div class="detail-header animate-fadeIn">
            <div class="detail-header-info">
                <h1>${w.name}</h1>
                <div class="detail-address">
                    <i data-lucide="map-pin"></i>
                    ${w.address}, ${w.city}
                </div>
                <div class="detail-meta">
                    <span class="rating-number" style="font-size:var(--text-base);padding:var(--space-1) var(--space-3);">${w.rating}</span>
                    ${renderStars(w.rating, 16)}
                    <span style="color:var(--text-tertiary);font-size:var(--text-sm);">(${w.totalReviews} ulasan)</span>
                    ${w.isOpen ? renderBadge('success', 'Buka Sekarang') : renderBadge('danger', 'Tutup')}
                    ${w.isVerified ? renderBadge('info', 'Terverifikasi') : ''}
                </div>
            </div>
            <button class="btn btn-primary btn-lg btn-pill" onclick="navigateTo('booking')">
                <i data-lucide="calendar-check"></i> Booking Sekarang
            </button>
        </div>

        <!-- Gallery -->
        <div class="detail-gallery animate-fadeInUp">
            <div class="gallery-item"><div class="gallery-placeholder"><i data-lucide="image"></i><p style="font-size:var(--text-xs);margin-top:4px;">Foto Bengkel</p></div></div>
            <div class="gallery-item"><div class="gallery-placeholder"><i data-lucide="image"></i></div></div>
            <div class="gallery-item"><div class="gallery-placeholder"><i data-lucide="image"></i></div></div>
        </div>

        <!-- Content Grid -->
        <div class="detail-content">
            <div>
                <!-- Description -->
                <div class="card" style="margin-bottom:var(--space-5);">
                    <div class="card-body">
                        <h3 style="margin-bottom:var(--space-3);">Tentang Bengkel</h3>
                        <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.7;">${w.description}</p>
                        <div style="margin-top:var(--space-4);display:flex;gap:var(--space-2);flex-wrap:wrap;">
                            ${w.categories.map(c => `<span class="badge badge-primary">${c}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div class="card" style="margin-bottom:var(--space-5);">
                    <div class="card-header"><h3>Layanan & Harga</h3></div>
                    <table class="services-table">
                        <thead>
                            <tr><th>Layanan</th><th>Harga</th><th>Estimasi</th></tr>
                        </thead>
                        <tbody>
                            ${w.services.map(s => `
                                <tr>
                                    <td><strong>${s.name}</strong></td>
                                    <td class="price">${s.price}</td>
                                    <td style="color:var(--text-tertiary);">${s.duration}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- Reviews -->
                <div class="card">
                    <div class="card-header">
                        <h3>Ulasan (${reviews.length})</h3>
                        <button class="btn btn-sm btn-outline" onclick="showToast('info','Ulasan','Fitur tulis ulasan akan segera hadir!')">
                            <i data-lucide="edit-3"></i> Tulis Ulasan
                        </button>
                    </div>
                    <div class="card-body">
                        ${reviews.length > 0 
                            ? reviews.map(r => renderReviewCard(r)).join('') 
                            : '<p style="color:var(--text-tertiary);text-align:center;padding:var(--space-6);">Belum ada ulasan</p>'}
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="detail-sidebar">
                <!-- Hours -->
                <div class="card">
                    <div class="card-header"><h3>Jam Operasional</h3></div>
                    <div class="card-body">
                        <ul class="hours-list">
                            ${w.hours.map(h => `
                                <li class="${today.includes(h.day) ? 'today' : ''}">
                                    <span>${h.day}</span>
                                    <span>${h.closed ? 'Tutup' : h.open + ' — ' + h.close}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Contact -->
                <div class="card">
                    <div class="card-header"><h3>Kontak</h3></div>
                    <div class="card-body">
                        <div class="contact-item"><i data-lucide="phone"></i><span>${w.phone}</span></div>
                        <div class="contact-item"><i data-lucide="message-circle"></i><span>${w.whatsapp} (WhatsApp)</span></div>
                        <div class="contact-item"><i data-lucide="mail"></i><span>${w.email}</span></div>
                        <div class="contact-item"><i data-lucide="user"></i><span>Pemilik: ${w.owner}</span></div>
                    </div>
                </div>

                <!-- Map -->
                <div class="card">
                    <div class="card-header"><h3>Lokasi</h3></div>
                    <div id="detailMap" style="height:220px;border-radius:0 0 var(--radius-lg) var(--radius-lg);"></div>
                </div>
            </div>
        </div>
    `;
}


// ============= AUTH PAGES =============
function renderLoginPage() {
    return `
        <div class="auth-page">
            <div class="auth-card animate-scaleIn">
                <div class="auth-header">
                    <div class="auth-logo">SD</div>
                    <h1>Masuk ke Akun Anda</h1>
                    <p>Selamat datang kembali! Silakan masuk untuk melanjutkan.</p>
                </div>

                <div class="social-login-btns">
                    <button class="social-btn" onclick="showToast('info','Login','Google login akan segera hadir')">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        Google
                    </button>
                    <button class="social-btn" onclick="showToast('info','Login','Facebook login akan segera hadir')">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Facebook
                    </button>
                </div>

                <div class="auth-divider">atau masuk dengan email</div>

                <form onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" id="loginEmail" placeholder="nama@email.com" required value="az15122115@gmail.com">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" id="loginPassword" placeholder="Masukkan password" required value="password123">
                    </div>
                    <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-5);font-size:var(--text-sm);">
                        <label style="display:flex;align-items:center;gap:var(--space-2);color:var(--text-secondary);cursor:pointer;">
                            <input type="checkbox" style="width:auto;accent-color:var(--primary);"> Ingat saya
                        </label>
                        <a href="#" onclick="showToast('info','Password','Fitur reset password akan segera hadir')">Lupa password?</a>
                    </div>
                    <button type="submit" id="loginBtn" class="btn btn-primary btn-lg" style="width:100%;">Masuk</button>
                </form>

                <div class="auth-footer">
                    Belum punya akun? <a href="#" onclick="navigateTo('register')">Daftar Sekarang</a>
                </div>
            </div>
        </div>
    `;
}

function renderRegisterPage() {
    return `
        <div class="auth-page">
            <div class="auth-card animate-scaleIn">
                <div class="auth-header">
                    <div class="auth-logo">SD</div>
                    <h1>Buat Akun Baru</h1>
                    <p>Bergabung dengan Saudara Dekat — gratis selamanya!</p>
                </div>

                <form onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <label class="form-label">Nama Lengkap</label>
                        <input type="text" id="regName" placeholder="Masukkan nama lengkap" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" id="regEmail" placeholder="nama@email.com" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">No. Telepon</label>
                        <input type="tel" id="regPhone" placeholder="+62 812 XXXX XXXX" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" id="regPassword" placeholder="Minimal 8 karakter" required minlength="8">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Daftar Sebagai</label>
                        <select id="regRole" required>
                            <option value="">-- Pilih Role --</option>
                            <option value="customer">Pelanggan</option>
                            <option value="workshop_owner">Pemilik Bengkel</option>
                        </select>
                    </div>
                    <div style="margin-bottom:var(--space-5);">
                        <label style="display:flex;align-items:flex-start;gap:var(--space-2);color:var(--text-secondary);font-size:var(--text-sm);cursor:pointer;">
                            <input type="checkbox" required style="width:auto;margin-top:3px;accent-color:var(--primary);">
                            Saya setuju dengan <a href="#" onclick="event.preventDefault();showToast('info','S&K','Syarat & Ketentuan akan segera tersedia')">Syarat & Ketentuan</a> dan <a href="#" onclick="event.preventDefault();showToast('info','Privasi','Kebijakan Privasi akan segera tersedia')">Kebijakan Privasi</a>
                        </label>
                    </div>
                    <button type="submit" id="regBtn" class="btn btn-primary btn-lg" style="width:100%;">Daftar Sekarang</button>
                </form>

                <div class="auth-footer">
                    Sudah punya akun? <a href="#" onclick="navigateTo('login')">Masuk</a>
                </div>
            </div>
        </div>
    `;
}


// ============= INTERACTION HANDLERS =============

function filterWorkshops() {
    const query = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const list = document.getElementById('workshopList');
    if (!list) return;

    const filtered = APP_DATA.workshops.filter(w =>
        w.name.toLowerCase().includes(query) ||
        w.address.toLowerCase().includes(query) ||
        w.categories.some(c => c.toLowerCase().includes(query))
    );

    list.innerHTML = filtered.length > 0 
        ? filtered.map(w => renderWorkshopListCard(w)).join('') 
        : '<div class="empty-state"><div class="empty-state-icon"><i data-lucide="search-x"></i></div><h3>Tidak Ditemukan</h3><p>Coba kata kunci lain</p></div>';
    
    if (window.lucide) lucide.createIcons();
}

function filterCategory(el, category) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    const list = document.getElementById('workshopList');
    if (!list) return;

    let filtered = APP_DATA.workshops;
    if (category !== 'Semua') {
        filtered = APP_DATA.workshops.filter(w =>
            w.categories.some(c => c.toLowerCase().includes(category.toLowerCase()))
        );
    }

    list.innerHTML = filtered.length > 0 
        ? filtered.map(w => renderWorkshopListCard(w)).join('') 
        : '<div class="empty-state"><h3>Tidak ada bengkel</h3><p>Tidak ada bengkel dalam kategori ini</p></div>';
    
    if (window.lucide) lucide.createIcons();
}

function filterReviews(el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    
    const filter = el.textContent;
    let reviews = [...APP_DATA.reviews];
    
    if (filter === 'Rating Tertinggi') {
        reviews.sort((a, b) => b.rating - a.rating);
    } else if (filter === 'Rating Terendah') {
        reviews.sort((a, b) => a.rating - b.rating);
    }

    const list = document.getElementById('reviewsList');
    if (list) {
        list.innerHTML = reviews.map(r => renderReviewCard(r)).join('');
        if (window.lucide) lucide.createIcons();
    }
}

function updateSummary() {
    const ws = document.getElementById('bookingWorkshop');
    const workshop = ws ? APP_DATA.workshops.find(w => w.id == ws.value) : null;
    
    const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val || '—';
    };

    set('sumWorkshop', workshop ? workshop.name : null);
    set('sumVehicle', document.getElementById('bookingVehicle')?.value);
    set('sumPlate', document.getElementById('bookingPlate')?.value);
    set('sumService', document.getElementById('bookingService')?.value);
    set('sumDate', document.getElementById('bookingDate')?.value);
    set('sumTime', document.getElementById('bookingTime')?.value);
}

async function handleBooking(event) {
    event.preventDefault();
    
    if (!authState.isLoggedIn) {
        showToast('warning', 'Login Diperlukan', 'Silakan login terlebih dahulu untuk membuat booking.');
        setTimeout(() => navigateTo('login'), 1000);
        return;
    }

    const workshopId = document.getElementById('bookingWorkshop')?.value;
    const bookingDate = document.getElementById('bookingDate')?.value;
    const timeSlot = document.getElementById('bookingTime')?.value;
    const notes = document.getElementById('bookingNotes')?.value;

    if (!workshopId || !bookingDate || !timeSlot) {
        showToast('warning', 'Form Belum Lengkap', 'Silakan isi bengkel, tanggal, dan jam.');
        return;
    }

    try {
        const data = await API.createBooking({ workshop_id: parseInt(workshopId), booking_date: bookingDate, time_slot: timeSlot, notes });
        showToast('success', 'Booking Berhasil!', data.message);
        setTimeout(() => navigateTo('akun'), 1500);
    } catch (err) {
        showToast('error', 'Booking Gagal', err.message);
    }
}

async function handleLogin(event) {
    event.preventDefault();
    const btn = document.getElementById('loginBtn');
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;
    
    if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }

    try {
        const data = await API.login(email, password);
        updateUIForUser(data.user);
        showToast('success', 'Login Berhasil!', `Selamat datang kembali, ${data.user.name}!`);
        setTimeout(() => navigateTo('beranda'), 1000);
    } catch (err) {
        showToast('error', 'Login Gagal', err.message);
        if (btn) { btn.disabled = false; btn.textContent = 'Masuk'; }
    }
}

async function handleRegister(event) {
    event.preventDefault();
    const btn = document.getElementById('regBtn');
    const name = document.getElementById('regName')?.value;
    const email = document.getElementById('regEmail')?.value;
    const phone = document.getElementById('regPhone')?.value;
    const password = document.getElementById('regPassword')?.value;
    const role = document.getElementById('regRole')?.value;

    if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }

    try {
        const data = await API.register({ name, email, phone, password, role });
        updateUIForUser(data.user);
        showToast('success', 'Pendaftaran Berhasil!', data.message);
        setTimeout(() => navigateTo('beranda'), 1500);
    } catch (err) {
        showToast('error', 'Pendaftaran Gagal', err.message);
        if (btn) { btn.disabled = false; btn.textContent = 'Daftar Sekarang'; }
    }
}

function updateUIForUser(user) {
    const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    // Update sidebar user info
    const nameEl = document.querySelector('.user-name-sm');
    const roleEl = document.querySelector('.user-role-sm');
    const avatarEl = document.querySelector('.user-avatar-sm');
    const headerAvatar = document.querySelector('.user-avatar-header');
    if (nameEl) nameEl.textContent = user.name;
    if (roleEl) roleEl.textContent = user.role === 'admin' ? 'Admin' : user.role === 'workshop_owner' ? 'Pemilik Bengkel' : 'Customer';
    if (avatarEl) avatarEl.textContent = initials;
    if (headerAvatar) headerAvatar.textContent = initials;
}

function handleLogout() {
    API.logout();
    showToast('info', 'Logout', 'Anda telah keluar dari akun.');
    updateUIForUser({ name: 'Guest', role: 'customer' });
    navigateTo('login');
}
