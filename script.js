<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Warkop Candra - Warung Kopi Terbaik</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Animated Background -->
    <div class="bg-animation" id="bgAnimation"></div>

    <!-- Header -->
<header class="header" id="header">
        <div class="nav-container">
            <div class="logo-section" id="logo">
                <div class="logo-img">
                    <img src="logo.png" alt="Logo Warkop Candra">
                </div>
                <div class="logo-text">
                    WARKOP <span class="highlight">CANDRA</span>
                </div>
            </div>
            <nav>
                <button class="menu-toggle" id="menuToggle" type="button" aria-label="Toggle Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <ul class="main-nav" id="mainNav">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" data-section="home">
                            <i class="fas fa-home"></i> HOME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="menu">
                            <i class="fas fa-coffee"></i> MENU
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="tentang">
                            <i class="fas fa-info-circle"></i> TENTANG
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="kontak">
                            <i class="fas fa-phone"></i> KONTAK
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-section="galeri">
                            <i class="fas fa-images"></i> GALERI
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Home Section -->
        <section id="home" class="content-section active">
            <div class="hero-section">
                <div class="hero-content">
                    <h1 class="hero-title">Selamat Datang di WARKOP CANDRA</h1>
                    <p class="hero-subtitle">
                        Nikmati pengalaman ngopi terbaik dengan suasana ceria, WiFi super cepat, 
                        dan harga yang bersahabat di warung kopi terbaik.
                    </p>
                    <button class="cta-button" onclick="showSection('menu')">
                        <i class="fas fa-coffee"></i> Lihat Menu
                    </button>
                </div>
            </div>

            <div class="feature-grid">
                <div class="feature-box">
                    <div class="feature-icon">
                        <i class="fas fa-wifi"></i>
                    </div>
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">WiFi Super Cepat</h3>
                    <p style="color: var(--text-light);">Internet 250 Mbps anti lemot, produktivitas makin top!</p>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">
                        <i class="fas fa-music"></i>
                    </div>
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Musik Sepanjang Hari</h3>
                    <p style="color: var(--text-light);">Musik asik sepanjang hari yang bikin betah berlama-lama</p>
                </div>
                <div class="feature-box">
                    <div class="feature-icon">
                        <i class="fas fa-hand-holding-heart"></i>
                    </div>
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Harga Bersahabat</h3>
                    <p style="color: var(--text-light);">Menu komplit dari ngopi sampai ngemil, tidak membuat kantongmu kering</p>
                </div>
                <div class="feature-box">
            <div class="feature-icon">
                <i class="fas fa-clock"></i>
            </div>
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Buka 24 Jam</h3>
            <p style="color: var(--text-light);">Karena keinginan ngopi nggak kenal waktu!</p>
            </div>
        </div>

            <div class="card">
                <h2 style="color: var(--primary-color); font-size: 2rem; margin-bottom: 1.5rem; text-align: center;">
                    <i class="fas fa-heart"></i> Tentang Kami
                </h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light); text-align: justify; margin-bottom: 1.5rem;">
                    Sejak pertama kali dibuka pada tahun 2016 di Jalan Raya Surabaya—Madiun, Gilang, Taman, Sidoarjo, tepatnya di sebelah barat 
                    Garasi Bus Sinar Mandiri, Warkop Candra hadir sebagai tempat singgah yang sederhana namun penuh cerita. Di tahun 2020, kami 
                    memperluas perjalanan ini dengan membuka cabang baru di Krian, Sidoarjo, yang hingga kini menjadi tempat utama kami melayani 
                    pelanggan setia.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light); text-align: justify; margin-bottom: 1.5rem;">
                    Warkop Candra berdiri dengan filosofi sederhana: menyediakan tempat santai dengan harga terjangkau,
                    di mana setiap orang dapat menikmati secangkir kopi sambil berbagi cerita, melepas penat, atau 
                    bekerja dengan suasana yang nyaman. Kami percaya bahwa kopi bukan hanya soal rasa, tetapi juga 
                    pengalaman yang menyertainya.
                </p>
                <div style="background: var(--gradient-primary); padding: 1.5rem; border-radius: 15px; color: white; text-align: center; margin-top: 2rem;">
                    <h3 style="margin-bottom: 1rem;"><i class="fas fa-star"></i> Komitmen Kami</h3>
                    <p><strong>Kualitas • Kenyamanan • Komunitas</strong></p>
                </div>
            </div>
        </section>

        <!-- Menu Section -->
        <section id="menu" class="content-section">
            <h1 class="section-title">Menu Kami</h1>
            <div class="menu-grid">
                <div class="menu-card">
                    <h3><i class="fas fa-mug-hot"></i> Kopi Panas</h3>
                    <div class="menu-item">
                        <span class="menu-name">Kopi Lasem</span>
                        <span class="menu-price">Rp 15.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Kopi Hitam</span>
                        <span class="menu-price">Rp 12.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Kopi Sachet</span>
                        <span class="menu-price">Rp 18.000</span>
                    </div>
                     <div class="menu-item">
                        <span class="menu-name">Kopi Susu</span>
                        <span class="menu-price">Rp 18.000</span>
                    </div>
                </div>

                <div class="menu-card">
                    <h3><i class="fas fa-snowflake"></i>Es</h3>
                    <div class="menu-item">
                        <span class="menu-name">Pop Ice</span>
                        <span class="menu-price">Rp 18.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Nutrisari</span>
                        <span class="menu-price">Rp 16.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Good Day Freeze/Cappucino</span>
                        <span class="menu-price">Rp 22.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Soda Gembira</span>
                        <span class="menu-price">Rp 25.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Segar Dingin</span>
                        <span class="menu-price">Rp 15.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Adem Sari</span>
                        <span class="menu-price">Rp 15.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Es Teh</span>
                        <span class="menu-price">Rp 15.000</span>
                    </div>
                </div>

                <div class="menu-card">
                    <h3><i class="fas fa-glass-water"></i> Minuman Non-Kopi</h3>
                    <div class="menu-item">
                        <span class="menu-name">Teh Hangat</span>
                        <span class="menu-price">Rp 12.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Energen</span>
                        <span class="menu-price">Rp 15.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Chocolatos</span>
                        <span class="menu-price">Rp 18.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Susu Putih/Coklat</span>
                        <span class="menu-price">Rp 22.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Es Teh Manis</span>
                        <span class="menu-price">Rp 8.000</span>
                    </div>
                </div>

                <div class="menu-card">
                    <h3><i class="fas fa-bread-slice"></i> Makanan</h3>
                    <div class="menu-item">
                        <span class="menu-name">Roti Bakar</span>
                        <span class="menu-price">Rp 12.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Croissant</span>
                        <span class="menu-price">Rp 15.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Sandwich Club</span>
                        <span class="menu-price">Rp 20.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Nasi Gudeg</span>
                        <span class="menu-price">Rp 18.000</span>
                    </div>
                    <div class="menu-item">
                        <span class="menu-name">Pisang Goreng</span>
                        <span class="menu-price">Rp 8.000</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tentang Section -->
        <section id="tentang" class="content-section">
            <h1 class="section-title">Tentang Warkop Candra</h1>
            
            <div class="card">
                <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem;">
                    <i class="fas fa-history"></i> Sejarah Kami
                </h3>
                <img src="IMG-20250906-WA0004.jpg" alt="Tampak Depan Warkop Candra" style="width: 100%; border-radius: 15px; margin-bottom: 1.5rem;">
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light);">
                    Warkop Candra didirikan pada tahun 2016 dengan visi menciptakan ruang 
                    komunitas yang nyaman untuk para pecinta kopi. Berawal dari sebuah warung kecil di Jalan Raya 
                    Surabaya—Madiun, Gilang, Taman, Sidoarjo, kini Warkop Candra telah berkembang menjadi destinasi favorit di 
                    Jawa Timur dengan membuka cabang di Krian, Sidoarjo pada tahun 2020.
                </p>
            </div>
            
            <div class="card">
                <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem;">
                    <i class="fas fa-bullseye"></i> Visi & Misi
                </h3>
                <div style="background: var(--light-color); padding: 1.5rem; border-radius: 15px; margin-bottom: 1rem;">
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-dark); margin-bottom: 1rem;">
                        <strong style="color: var(--primary-color);">Visi:</strong> Menjadi warkop terdepan yang menyajikan kopi berkualitas dengan harga terjangkau dan suasana yang hangat bagi semua kalangan.
                    </p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-dark);">
                        <strong style="color: var(--primary-color);">Misi:</strong> Menyediakan pengalaman ngopi yang autentik, membangun komunitas yang solid, dan mendukung petani kopi lokal melalui kemitraan yang berkelanjutan.
                    </p>
                </div>
            </div>

            <div class="card">
                <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem;">
                    <i class="fas fa-star"></i> Keunggulan Kami
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: var(--light-color); padding: 1rem; border-radius: 10px; text-align: center;">
                        <i class="fas fa-seedling" style="color: var(--secondary-color); font-size: 2rem; margin-bottom: 0.5rem;"></i>
                        <p style="color: var(--text-dark); font-weight: 600;">Biji Kopi Pilihan</p>
                        <p style="color: var(--text-light); font-size: 0.9rem;">Dari petani lokal Jawa Timur</p>
                    </div>
                    <div style="background: var(--light-color); padding: 1rem; border-radius: 10px; text-align: center;">
                        <i class="fas fa-tags" style="color: var(--secondary-color); font-size: 2rem; margin-bottom: 0.5rem;"></i>
                        <p style="color: var(--text-dark); font-weight: 600;">Harga Transparan</p>
                        <p style="color: var(--text-light); font-size: 0.9rem;">Terjangkau untuk semua</p>
                    </div>
                    <div style="background: var(--light-color); padding: 1rem; border-radius: 10px; text-align: center;">
                        <i class="fas fa-home" style="color: var(--secondary-color); font-size: 2rem; margin-bottom: 0.5rem;"></i>
                        <p style="color: var(--text-dark); font-weight: 600;">Suasana Hangat</p>
                        <p style="color: var(--text-light); font-size: 0.9rem;">Ramah keluarga</p>
                    </div>
                    <div style="background: var(--light-color); padding: 1rem; border-radius: 10px; text-align: center;">
                        <i class="fas fa-clock" style="color: var(--secondary-color); font-size: 2rem; margin-bottom: 0.5rem;"></i>
                        <p style="color: var(--text-dark); font-weight: 600;">Pelayanan Cepat</p>
                        <p style="color: var(--text-light); font-size: 0.9rem;">Dan berkualitas</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="kontak" class="content-section">
            <h1 class="section-title">Hubungi Kami</h1>
            <div class="contact-grid">
                <div class="card">
                    <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem;">
                        <i class="fas fa-map-marker-alt"></i> Lokasi Kami
                    </h3>
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="color: var(--secondary-color); margin-bottom: 0.5rem;">Cabang Utama - Krian</h4>
                        <p style="color: var(--text-light); line-height: 1.6;">
                            Jl. Raya Krian No. 88<br>
                            Krian, Sidoarjo<br>
                            Jawa Timur 61262
                        </p>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.7421427986847!2d112.61358637476181!3d-7.382767892626817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7809ef8d2eeaff%3A0x96a385a463426890!2sWarkop%20Candra2!5e0!3m2!1sid!2sid!4v1757157182522!5m2!1sid!2sid"
                        width="100%" 
                        height="300" 
                        style="border:0; border-radius: 15px;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div style="background: var(--light-color); padding: 1rem; border-radius: 10px; margin-top: 1.5rem;">
                        <p style="color: var(--text-dark); font-weight: 600; margin-bottom: 0.5rem;">
                            <i class="fas fa-clock"></i> Jam Operasional:
                        </p>
                        <p style="color: var(--text-light);">
                            BUKA 24 JAM
                        </p>
                    </div>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem;">
                        <i class="fas fa-phone"></i> Kontak
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 40px; height: 40px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-phone" style="color: white;"></i>
                            </div>
                            <div>
                                <p style="color: var(--text-dark); font-weight: 600;">Telepon</p>
                                <p style="color: var(--text-light);">(031) 567-8910</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 40px; height: 40px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i class="fab fa-whatsapp" style="color: white;"></i>
                            </div>
                            <div>
                                <p style="color: var(--text-dark); font-weight: 600;">WhatsApp</p>
                                <p style="color: var(--text-light);">+62 821-4105-5207</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 40px; height: 40px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-envelope" style="color: white;"></i>
                            </div>
                            <div>
                                <p style="color: var(--text-dark); font-weight: 600;">Email</p>
                                <p style="color: var(--text-light);">info@warkopcandra.com</p>
                            </div>
                        </div>
                        <div style="margin-top: 2rem;">
                        <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem;">
                            <i class="fas fa-comment-dots"></i> Kirim Kritik & Saran
                        </h3>
                        <p style="color: var(--text-light); margin-bottom: 1.5rem;">
                            Masukan Anda sangat berarti bagi kami untuk menjadi lebih baik.
                        </p>
                    <form id="feedbackForm">
                        <div class="feedback-input-wrapper">
                            <label for="feedbackMessage" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Pesan Anda</label>
                            <textarea id="feedbackMessage" rows="5" placeholder="Tulis kritik atau saran Anda di sini..." required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1rem; resize: vertical;"></textarea>
                            
                            <div id="feedbackError" class="custom-error-tooltip">
                                <i class="fas fa-exclamation-triangle"></i>
                                <span>Mohon isi kritik atau saran Anda.</span>
                            </div>
                        </div>

                        <button type="submit" id="kirimSaranBtn" class="cta-button" style="width: 100%;">
                            <i class="fab fa-whatsapp"></i> Kirim via WhatsApp
                        </button>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Galeri Section -->
        <section id="galeri" class="content-section">
            <h1 class="section-title">Galeri</h1>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-home" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Interior Utama
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-coffee" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Menu Signature
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-tree" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Suasana Outdoor
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-user-tie" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Barista Profesional
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-fire" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Fresh Brewing
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-users" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Komunitas Ngopi
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-music" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Live Music Event
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-placeholder">
                        <i class="fas fa-palette" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <br>Special Latte Art
                    </div>
                </div>
            </div>
            <p style="text-align: center; margin-top: 2rem; color: var(--text-light); font-style: italic;">
                * Foto-foto akan diganti dengan dokumentasi asli Warkop Candra
            </p>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3><i class="fas fa-coffee"></i> Warkop Candra</h3>
                <p>Di mana setiap cangkir kopi menjadi jembatan cerita, dan setiap kunjungan terasa seperti pulang ke rumah.</p>
            </div>
            <div class="footer-section">
                <h3><i class="fas fa-map-marker-alt"></i> Lokasi</h3>
                <ul>
                    <li>Jl. Raya Madiun - Surabaya No.KM, RW.25, Sidorejo, Kec. Krian, Kabupaten Sidoarjo</li>
                    <i>Sebelah barat PO Sumber Group dan di depan Pabrik Java</i>
                </ul>
                <p style="margin-top: 1rem; font-weight: 600;">Buka setiap hari: 24 Jam</p>
            </div>
            <div class="footer-section">
                <h3><i class="fas fa-phone"></i> Kontak</h3>
                <ul>
                    <li>Telepon: 082141055207</li>
                    <li>WhatsApp: +62 821-4105-5207</li>
                    <li>Email: info@warkopcandra.com</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3><i class="fas fa-star"></i> Mengapa Memilih Kami?</h3>
                <ul>
                    <li>WiFi Super Cepat 250 Mbps</li>
                    <li>Musik Sepanjang Hari</li>
                    <li>Buka 24 Jam</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Warkop Candra. All rights reserved. | Dibuat dengan ❤️ untuk para pecinta kopi</p>
        </div>
    </footer>

    <!-- WhatsApp Float Button -->
    <a href="https://wa.me/6282141055207" class="whatsapp-float" target="_blank" aria-label="Contact WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
    <script src="script.js"></script>
</body>
</html>
