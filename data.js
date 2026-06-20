/* ==========================================
   SAUDARA DEKAT — MOCK DATA
   Complete data layer for all pages
   ========================================== */

const APP_DATA = {
    // ---- Current User ----
    currentUser: {
        id: 1,
        name: "Ahmad Zaky",
        email: "az15122115@gmail.com",
        phone: "+62 812 3456 7890",
        address: "Jl. T. Nyak Arief, Banda Aceh",
        role: "customer",
        avatar: "AZ",
        vehicle: {
            type: "Motor",
            brand: "Honda",
            model: "Vario 150",
            plate: "BL 1234 AB",
            year: 2022
        },
        stats: {
            totalBookings: 12,
            favoriteWorkshop: "Bengkel Pion Jaya",
            reviewsWritten: 8,
            joinedSince: "Januari 2026"
        }
    },

    // ---- Workshops ----
    workshops: [
        {
            id: 1,
            name: "Bengkel Pion Jaya Motor",
            address: "Jl. T. Nyak Arief No. 12",
            city: "Banda Aceh",
            rating: 4.9,
            totalReviews: 324,
            distance: 2.3,
            isOpen: true,
            isVerified: true,
            phone: "+62 812 6789 0123",
            whatsapp: "+62 812 6789 0123",
            email: "pionebjaya@gmail.com",
            description: "Bengkel terpercaya dengan pengalaman lebih dari 15 tahun dalam servis kendaraan. Dilengkapi peralatan modern dan mekanik bersertifikat.",
            categories: ["Bengkel Motor", "Bengkel Mobil", "AC Mobil"],
            lat: 5.5483,
            lng: 95.3238,
            owner: "Pak Hasan",
            services: [
                { name: "Servis Rutin", price: "Rp 150.000 - 250.000", duration: "1-2 jam" },
                { name: "Ganti Oli", price: "Rp 80.000 - 150.000", duration: "30 menit" },
                { name: "Tune Up", price: "Rp 200.000 - 350.000", duration: "2-3 jam" },
                { name: "Servis AC", price: "Rp 250.000 - 500.000", duration: "2-4 jam" },
                { name: "Ganti Ban", price: "Rp 300.000 - 600.000", duration: "1 jam" },
                { name: "Perbaikan Mesin", price: "Rp 500.000 - 2.000.000", duration: "1-3 hari" }
            ],
            hours: [
                { day: "Senin", open: "08:00", close: "17:00" },
                { day: "Selasa", open: "08:00", close: "17:00" },
                { day: "Rabu", open: "08:00", close: "17:00" },
                { day: "Kamis", open: "08:00", close: "17:00" },
                { day: "Jumat", open: "08:00", close: "12:00" },
                { day: "Sabtu", open: "08:00", close: "15:00" },
                { day: "Minggu", open: "-", close: "-", closed: true }
            ]
        },
        {
            id: 2,
            name: "Saudara Gata",
            address: "Jl. Teuku Umar No. 45",
            city: "Banda Aceh",
            rating: 4.7,
            totalReviews: 218,
            distance: 3.1,
            isOpen: true,
            isVerified: true,
            phone: "+62 813 7890 1234",
            whatsapp: "+62 813 7890 1234",
            email: "saudaragata@gmail.com",
            description: "Spesialis servis motor dan modifikasi. Kami menyediakan layanan lengkap untuk kendaraan Anda dengan harga terjangkau.",
            categories: ["Bengkel Motor", "Modifikasi"],
            lat: 5.5520,
            lng: 95.3180,
            owner: "Ahmad Gata",
            services: [
                { name: "Ganti Oli", price: "Rp 50.000 - 100.000", duration: "20 menit" },
                { name: "Servis Rutin", price: "Rp 100.000 - 200.000", duration: "1 jam" },
                { name: "Tune Up Motor", price: "Rp 150.000 - 250.000", duration: "1-2 jam" },
                { name: "Modifikasi Ringan", price: "Rp 500.000 - 2.000.000", duration: "1-3 hari" }
            ],
            hours: [
                { day: "Senin", open: "08:30", close: "17:30" },
                { day: "Selasa", open: "08:30", close: "17:30" },
                { day: "Rabu", open: "08:30", close: "17:30" },
                { day: "Kamis", open: "08:30", close: "17:30" },
                { day: "Jumat", open: "08:30", close: "12:00" },
                { day: "Sabtu", open: "09:00", close: "15:00" },
                { day: "Minggu", open: "-", close: "-", closed: true }
            ]
        },
        {
            id: 3,
            name: "Aneuk Mak Service",
            address: "Jl. Mohd. Jam No. 8",
            city: "Banda Aceh",
            rating: 4.5,
            totalReviews: 156,
            distance: 4.0,
            isOpen: true,
            isVerified: true,
            phone: "+62 852 1234 5678",
            whatsapp: "+62 852 1234 5678",
            email: "aneukmak@gmail.com",
            description: "Bengkel multi-layanan dengan spesialisasi kelistrikan dan AC kendaraan. Pengalaman 10 tahun melayani masyarakat Aceh.",
            categories: ["Bengkel Mobil", "Elektrikal", "AC Mobil"],
            lat: 5.5550,
            lng: 95.3290,
            owner: "Teuku Ramli",
            services: [
                { name: "Servis Kelistrikan", price: "Rp 100.000 - 500.000", duration: "1-3 jam" },
                { name: "Isi Freon AC", price: "Rp 200.000 - 400.000", duration: "1 jam" },
                { name: "Servis AC Full", price: "Rp 350.000 - 800.000", duration: "3-5 jam" },
                { name: "Ganti Ban", price: "Rp 250.000 - 500.000", duration: "45 menit" }
            ],
            hours: [
                { day: "Senin", open: "07:30", close: "18:00" },
                { day: "Selasa", open: "07:30", close: "18:00" },
                { day: "Rabu", open: "07:30", close: "18:00" },
                { day: "Kamis", open: "07:30", close: "18:00" },
                { day: "Jumat", open: "07:30", close: "12:00" },
                { day: "Sabtu", open: "08:00", close: "16:00" },
                { day: "Minggu", open: "09:00", close: "14:00" }
            ]
        },
        {
            id: 4,
            name: "Liga Servis",
            address: "Jl. Sultan Iskandar Muda",
            city: "Banda Aceh",
            rating: 4.8,
            totalReviews: 289,
            distance: 5.2,
            isOpen: false,
            isVerified: true,
            phone: "+62 822 4567 8901",
            whatsapp: "+62 822 4567 8901",
            email: "ligaservis@gmail.com",
            description: "Bengkel premium dengan standar internasional. Dilengkapi lift hidrolik, scanner OBD, dan peralatan terkini.",
            categories: ["Bengkel Mobil", "Ban & Velg", "Las & Ketok"],
            lat: 5.5440,
            lng: 95.3350,
            owner: "Irfan Liga",
            services: [
                { name: "Tune Up Mobil", price: "Rp 300.000 - 500.000", duration: "2-3 jam" },
                { name: "Balancing & Spooring", price: "Rp 150.000 - 300.000", duration: "1 jam" },
                { name: "Las & Ketok", price: "Rp 500.000 - 3.000.000", duration: "1-5 hari" },
                { name: "Body Repair", price: "Rp 1.000.000 - 10.000.000", duration: "3-14 hari" },
                { name: "Cat Kendaraan", price: "Rp 2.000.000 - 8.000.000", duration: "5-10 hari" }
            ],
            hours: [
                { day: "Senin", open: "08:00", close: "17:00" },
                { day: "Selasa", open: "08:00", close: "17:00" },
                { day: "Rabu", open: "08:00", close: "17:00" },
                { day: "Kamis", open: "08:00", close: "17:00" },
                { day: "Jumat", open: "08:00", close: "12:00" },
                { day: "Sabtu", open: "08:00", close: "15:00" },
                { day: "Minggu", open: "-", close: "-", closed: true }
            ]
        }
    ],

    // ---- Categories ----
    categories: [
        { id: 1, name: "Bengkel Mobil", slug: "bengkel-mobil", description: "Servis mesin, AC, oli, dll", icon: "car", count: 124 },
        { id: 2, name: "Bengkel Motor", slug: "bengkel-motor", description: "Tune up, ganti oli, kopling", icon: "bike", count: 218 },
        { id: 3, name: "Las & Ketok", slug: "las-ketok", description: "Perbaikan bodi kendaraan", icon: "hammer", count: 56 },
        { id: 4, name: "Ban & Velg", slug: "ban-velg", description: "Ganti ban, balancing, spooring", icon: "circle-dot", count: 89 },
        { id: 5, name: "Cuci Kendaraan", slug: "cuci-kendaraan", description: "Cuci mobil & motor", icon: "droplets", count: 145 },
        { id: 6, name: "Modifikasi", slug: "modifikasi", description: "Custom & modifikasi kendaraan", icon: "settings", count: 42 },
        { id: 7, name: "Elektrikal", slug: "elektrikal", description: "Kelistrikan & audio mobil", icon: "zap", count: 67 },
        { id: 8, name: "AC Mobil", slug: "ac-mobil", description: "Servis & isi freon AC", icon: "wind", count: 78 },
        { id: 9, name: "Darurat 24 Jam", slug: "darurat-24jam", description: "Bengkel buka 24 jam", icon: "siren", count: 23 }
    ],

    // ---- Reviews ----
    reviews: [
        {
            id: 1,
            userName: "Ahmad Rizky",
            userAvatar: "AR",
            workshopName: "Bengkel Pion Jaya Motor",
            workshopId: 1,
            rating: 4.9,
            comment: "Pelayanan sangat ramah dan cepat. Mesin langsung halus setelah servis.",
            date: "2 hari lalu",
            isVerified: true
        },
        {
            id: 2,
            userName: "Siti Nurhaliza",
            userAvatar: "SN",
            workshopName: "Saudara Gata",
            workshopId: 2,
            rating: 4.7,
            comment: "Harga terjangkau, kualitas oke. Recommended untuk ganti oli rutin.",
            date: "5 hari lalu",
            isVerified: true
        },
        {
            id: 3,
            userName: "Budi Santoso",
            userAvatar: "BS",
            workshopName: "Aneuk Mak Service",
            workshopId: 3,
            rating: 4.5,
            comment: "Tempatnya bersih, mekaniknya berpengalaman. Cuma agak lama antrinya.",
            date: "1 minggu lalu",
            isVerified: true
        },
        {
            id: 4,
            userName: "Dewi Lestari",
            userAvatar: "DL",
            workshopName: "Liga Servis",
            workshopId: 4,
            rating: 4.8,
            comment: "Tune up di sini hasilnya mantap. Harga sesuai dengan kualitas.",
            date: "2 minggu lalu",
            isVerified: true
        },
        {
            id: 5,
            userName: "Reza Aditya",
            userAvatar: "RA",
            workshopName: "Bengkel Pion Jaya Motor",
            workshopId: 1,
            rating: 5.0,
            comment: "Best workshop di Banda Aceh! Mekanik sangat profesional dan ramah. Sudah jadi pelanggan tetap.",
            date: "3 minggu lalu",
            isVerified: true
        },
        {
            id: 6,
            userName: "Fitri Handayani",
            userAvatar: "FH",
            workshopName: "Saudara Gata",
            workshopId: 2,
            rating: 4.3,
            comment: "Pelayanan cukup baik, tapi waktu tunggu agak lama di jam ramai.",
            date: "1 bulan lalu",
            isVerified: false
        }
    ],

    // ---- Booking History ----
    bookings: [
        {
            id: 1,
            workshopName: "Bengkel Pion Jaya",
            workshopId: 1,
            service: "Servis Rutin",
            date: "12 Mei 2026",
            time: "09:00",
            status: "completed",
            statusText: "Selesai",
            vehicle: "Honda Vario 150 - BL 1234 AB",
            notes: "Servis berkala 5000km",
            total: "Rp 175.000"
        },
        {
            id: 2,
            workshopName: "Saudara Gata",
            workshopId: 2,
            service: "Ganti Oli",
            date: "5 Mei 2026",
            time: "10:30",
            status: "completed",
            statusText: "Selesai",
            vehicle: "Honda Vario 150 - BL 1234 AB",
            notes: "Ganti oli mesin + filter",
            total: "Rp 95.000"
        },
        {
            id: 3,
            workshopName: "Liga Servis",
            workshopId: 4,
            service: "Tune Up",
            date: "28 Apr 2026",
            time: "14:00",
            status: "cancelled",
            statusText: "Dibatalkan",
            vehicle: "Honda Vario 150 - BL 1234 AB",
            notes: "Dibatalkan karena jadwal bentrok",
            total: "-"
        },
        {
            id: 4,
            workshopName: "Aneuk Mak Service",
            workshopId: 3,
            service: "Ganti Ban",
            date: "15 Apr 2026",
            time: "11:00",
            status: "completed",
            statusText: "Selesai",
            vehicle: "Honda Vario 150 - BL 1234 AB",
            notes: "Ganti ban depan & belakang",
            total: "Rp 450.000"
        }
    ],

    // ---- Owner Dashboard Data ----
    ownerDashboard: {
        stats: {
            totalBookings: 156,
            activeBookings: 8,
            revenue: "Rp 12.5 Juta",
            avgRating: 4.8,
            totalCustomers: 89,
            completionRate: "94%"
        },
        revenueData: [
            { month: "Jan", amount: 8500000 },
            { month: "Feb", amount: 9200000 },
            { month: "Mar", amount: 7800000 },
            { month: "Apr", amount: 11500000 },
            { month: "Mei", amount: 12500000 },
            { month: "Jun", amount: 10800000 }
        ],
        pendingBookings: [
            { id: 101, customer: "Rizky Pratama", service: "Servis Rutin", date: "28 Mei 2026", time: "09:00", vehicle: "Honda Beat" },
            { id: 102, customer: "Siti Aisyah", service: "Ganti Oli", date: "28 Mei 2026", time: "10:30", vehicle: "Yamaha NMAX" },
            { id: 103, customer: "Budi Prasetyo", service: "Tune Up", date: "29 Mei 2026", time: "08:00", vehicle: "Toyota Avanza" },
            { id: 104, customer: "Linda Kusuma", service: "Servis AC", date: "29 Mei 2026", time: "13:00", vehicle: "Honda Civic" }
        ],
        weeklySchedule: [
            { day: "Sen", count: 5, date: "26" },
            { day: "Sel", count: 3, date: "27" },
            { day: "Rab", count: 7, date: "28" },
            { day: "Kam", count: 4, date: "29" },
            { day: "Jum", count: 2, date: "30" },
            { day: "Sab", count: 6, date: "31" },
            { day: "Min", count: 0, date: "1" }
        ],
        activities: [
            { text: "<strong>Rizky Pratama</strong> membuat booking baru — Servis Rutin", time: "10 menit lalu", type: "orange" },
            { text: "<strong>Booking #098</strong> telah selesai dikerjakan", time: "1 jam lalu", type: "green" },
            { text: "<strong>Siti Aisyah</strong> memberikan rating ⭐ 4.8", time: "2 jam lalu", type: "blue" },
            { text: "<strong>Booking #095</strong> dibatalkan oleh pelanggan", time: "5 jam lalu", type: "red" },
            { text: "<strong>Budi Prasetyo</strong> membuat booking baru — Tune Up", time: "6 jam lalu", type: "orange" },
            { text: "<strong>Booking #093</strong> telah selesai dikerjakan", time: "1 hari lalu", type: "green" }
        ]
    },

    // ---- Admin Dashboard Data ----
    adminDashboard: {
        stats: {
            totalUsers: 2847,
            totalWorkshops: 523,
            totalBookings: 8945,
            monthlyRevenue: "Rp 125.8 Juta"
        },
        pendingVerifications: [
            { id: 1, name: "Bengkel Jaya Abadi", owner: "Pak Salman", location: "Jl. Cut Mutia No. 15", date: "25 Mei 2026" },
            { id: 2, name: "Motor Sehat", owner: "Ibu Rahmah", location: "Jl. Diponegoro No. 88", date: "24 Mei 2026" },
            { id: 3, name: "Auto Care Center", owner: "Hendra Wijaya", location: "Jl. Sudirman No. 102", date: "23 Mei 2026" }
        ],
        flaggedReviews: [
            { id: 1, user: "Anonymous123", workshop: "Bengkel XYZ", rating: 1.0, text: "Tempat ini penipu! Jangan datang ke sini. Hasil kerja amburadul dan harga tidak sesuai.", date: "26 Mei 2026" },
            { id: 2, user: "SpamBot99", workshop: "Motor Jaya", rating: 5.0, text: "PROMO BESAR-BESARAN! Klik link ini untuk mendapat diskon 90%...", date: "25 Mei 2026" }
        ],
        recentUsers: [
            { name: "Ahmad Fauzi", email: "ahmad.f@gmail.com", role: "customer", date: "27 Mei 2026" },
            { name: "Bengkel Maju Jaya", email: "majujaya@gmail.com", role: "workshop_owner", date: "26 Mei 2026" },
            { name: "Putri Amelia", email: "putri.a@gmail.com", role: "customer", date: "26 Mei 2026" },
            { name: "Rudi Hartono", email: "rudi.h@gmail.com", role: "customer", date: "25 Mei 2026" }
        ]
    },

    // ---- Testimonials (Home Page) ----
    testimonials: [
        {
            name: "Muhammad Fadil",
            role: "Pelanggan Setia",
            avatar: "MF",
            text: "Saudara Dekat memudahkan saya mencari bengkel terpercaya. Tidak perlu lagi tanya-tanya ke teman, tinggal buka aplikasi dan booking!",
        },
        {
            name: "Nur Azizah",
            role: "Pemilik Honda Jazz",
            avatar: "NA",
            text: "Fitur rating dan reviewnya sangat membantu. Saya bisa memilih bengkel dengan percaya diri karena ulasan dari pengguna lain.",
        },
        {
            name: "Teuku Irfan",
            role: "Pemilik Bengkel",
            avatar: "TI",
            text: "Sebagai pemilik bengkel, platform ini membantu saya mendapatkan pelanggan baru. Dashboard-nya juga sangat lengkap untuk manajemen.",
        }
    ],

    // ---- Platform Stats ----
    platformStats: {
        workshops: "500+",
        users: "10.000+",
        rating: "4.8 / 5.0",
        availability: "24/7"
    },

    // ---- Rating Distribution ----
    ratingDistribution: {
        five: 75,
        four: 15,
        three: 7,
        two: 2,
        one: 1,
        total: 1247,
        average: 4.8
    }
};
