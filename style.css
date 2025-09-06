        /* Reset & Variables */
        :root {
            --primary-color: #8B4513;
            --secondary-color: #D2691E;
            --accent-color: #FFD700;
            --dark-color: #2c1810;
            --light-color: #f8f6f3;
            --text-dark: #333;
            --text-light: #666;
            --gradient-primary: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            --gradient-accent: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            --shadow-soft: 0 10px 40px rgba(139, 69, 19, 0.1);
            --shadow-medium: 0 15px 50px rgba(139, 69, 19, 0.2);
            --border-radius: 20px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background: var(--light-color);
            color: var(--text-dark);
            overflow-x: hidden;
            animation: pageFadeIn 1.2s ease-out forwards;
        }

        /* Animated Background */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.03;
            pointer-events: none;
        }

        .coffee-bean {
            position: absolute;
            background: var(--primary-color);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Header */
        .header {
            background: #ffffff; /* Latar belakang putih solid saat di atas */
            box-shadow: 0 5px 30px rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            transition: background-color 0.4s ease, backdrop-filter 0.4s ease; /* Transisi yang lebih spesifik */
        }

        .header.scrolled {
            background: rgba(255, 255, 255, 0.827); /* Latar belakang semi-transparan */
            backdrop-filter: blur(10px); /* Efek 'frosted glass' untuk tampilan modern */
            box-shadow: 0 8px 40px rgba(0,0,0,0.15);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding: 1rem 2rem;
        }

        .nav-container > nav {
            margin-left: auto;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
        }

        .logo-img {
            width: 65px;
            height: 65px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            font-weight: bold;
            color: white;
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
            position: relative;
        }

        .logo-img::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: var(--gradient-accent);
            opacity: 0;
            transition: all 0.3s ease;
        }

        .logo-img:hover::before {
            opacity: 0.2;
            transform: scale(1.1);
        }

        .logo-img:hover {
            transform: scale(1.05);
            box-shadow: var(--shadow-medium);
        }

        .logo-text {
            font-size: 2rem;
            font-weight: 800;
            color: var(--primary-color);
            letter-spacing: -1px;
        }

        .logo-text .highlight {
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Navigation */
        .menu-toggle {
            display: flex;
            background: var(--gradient-primary);
            border: none;
            border-radius: 12px;
            width: 50px;
            height: 50px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
            position: relative;   /* <-- TAMBAHKAN BARIS INI */
            z-index: 1002;        /* <-- TAMBAHKAN BARIS INI */
        }

        .menu-toggle:hover {
            transform: scale(1.05);
            box-shadow: var(--shadow-medium);
        }

        .menu-toggle span {
            width: 22px;
            height: 3px;
            background: white;
            margin: 3px 0;
            transition: all 0.3s ease;
            border-radius: 2px;
        }

        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        .main-nav {
            list-style: none;
            display: flex;
            gap: 2rem;
        }

        .nav-item a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 600;
            font-size: 1rem;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            position: relative;
            overflow: hidden;
        }

        .nav-item a:hover,
        .nav-item a.active {
            color: white;
            background-color: var(--primary-color);
        }
        .nav-item a i {
            display: none;
        }

        /* Main Content */
        .main-content {
            margin-top: 120px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 2rem;
        }

        .content-section {
            display: none;
            animation: slideUp 0.6s ease-out;
        }

        .content-section.active {
            display: block;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Hero Section */
        .hero-section {
            background-image: linear-gradient(rgba(44, 24, 16, 0.6), rgba(44, 24, 16, 0.6)), url('IMG-20250906-WA0006.jpg');
             background-size: cover;
            background-position: center;
            border-radius: var(--border-radius);
            padding: 4rem 2rem;
            text-align: center;
            color: white;
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
        }

        .hero-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
            animation: movePattern 20s linear infinite;
            pointer-events: none;
        }

        @keyframes movePattern {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50px, -50px); }
        }

        .hero-content {
            position: relative;
            z-index: 1;
        }

        .hero-title {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-subtitle {
            font-size: 1.3rem;
            opacity: 0.9;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-button {
            background: var(--gradient-accent);
            color: var(--dark-color);
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            box-shadow: var(--shadow-soft);
        }

        .cta-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: var(--shadow-medium);
        }

        /* Cards */
        .card {
            background: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
            border: 1px solid rgba(139, 69, 19, 0.1);
            position: relative;
            overflow: hidden;
            margin-bottom: 2rem;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--gradient-primary);
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-medium);
        }

        /* Menu Grid */
        .menu-grid {
            display: grid;
            grid-template-columns: 1fr; /* <-- Cukup ubah baris ini */
            gap: 2rem;
            margin-top: 3rem;
        }

        .menu-card {
            background: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .menu-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--gradient-primary);
        }

        .menu-card:hover {
            transform: translateY(-10px) rotate(1deg);
            box-shadow: var(--shadow-medium);
        }

        .menu-card h3 {
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .menu-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 0;
            border-bottom: 1px solid rgba(139, 69, 19, 0.1);
            transition: all 0.3s ease;
            position: relative; /* Tambahkan ini */
            transition: all 0.3s ease;
        }
        .menu-item::before {
            content: '';
            position: absolute;
            left: -2rem; /* Posisi awal di luar */
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            background: var(--secondary-color);
            border-radius: 50%;
            opacity: 0;
            transition: all 0.3s ease;
        }

        .menu-item:hover::before {
            left: -1.5rem; /* Bergerak ke dalam saat di-hover */
            opacity: 1;
        }

        .menu-item:last-child {
            border-bottom: none;
        }

        .menu-item:hover {
            background: rgba(139, 69, 19, 0.05);
            padding-left: 1rem;
        }

        .menu-name {
            color: var(--text-dark);
            font-weight: 500;
        }

        .menu-price {
            color: var(--secondary-color);
            font-weight: 700;
            font-size: 1.1rem;
        }

        /* Section Titles */
        .section-title {
            font-size: 3.5rem;
            font-weight: 900;
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0; /* Ubah dari left: 50% */
            right: 0; /* Tambahkan ini */
            margin: auto; /* Tambahkan ini untuk tetap di tengah */
            width: 100px;
            height: 4px;
            background: var(--gradient-accent);
            border-radius: 2px;
            transform: scaleX(0); /* Mulai dengan skala 0 */
            transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1); /* Animasi transisi */
        }
        .content-section.active .section-title::after {
            transform: scaleX(1); /* Animasikan ke skala penuh */
        }

        /* Gallery */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .gallery-item {
            height: 250px;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
            position: relative;
            cursor: pointer;
        }

        .gallery-item:hover {
            transform: scale(1.05) rotate(2deg);
            box-shadow: var(--shadow-medium);
        }

        .gallery-placeholder {
            width: 100%;
            height: 100%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            text-align: center;
            font-size: 1.2rem;
            position: relative;
        }

        .gallery-placeholder::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            animation: shine 3s infinite;
        }

        @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        /* Feature boxes */
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .feature-box {
            background: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--shadow-soft);
            text-align: center;
            transition: all 0.3s ease;
        }

        .feature-box:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-medium);
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
            color: white;
        }

        /* WhatsApp Button */
        .whatsapp-float {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 1000;
            background: #25D366;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            text-decoration: none;
            box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4); }
            50% { box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6), 0 0 0 10px rgba(37, 211, 102, 0.1); }
            100% { box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4); }
        }

        .whatsapp-float:hover {
            transform: scale(1.1);
            animation: none;
        }

        /* Contact Grid */
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        /* News cards */
        .news-card {
            background: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
            border-left: 4px solid var(--accent-color);
            margin-bottom: 2rem;
        }

        .news-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-medium);
        }

        .news-date {
            color: var(--text-light);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .news-title {
            color: var(--primary-color);
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        /* Footer */
        .footer {
            background: var(--dark-color);
            color: white;
            padding: 3rem 0 1rem;
            margin-top: 4rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            padding: 0 2rem;
        }

        .footer-section h3 {
            color: var(--accent-color);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .footer-section p, .footer-section li {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 0.5rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-section a:hover {
            color: var(--accent-color);
        }

        .footer-bottom {
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 2rem;
            margin-top: 2rem;
            color: rgba(255, 255, 255, 0.6);
        }
        

        /* Responsive Design */
        @media (max-width: 768px) {
            .menu-toggle {
                display: flex;
            }

        .main-nav {
            position: fixed;
            top: 0;
            right: 0; 
            width: 240px !important; 
            height: 100vh;
            background: rgba(245, 245, 245, 0.875);
            backdrop-filter: blur(15px);
            flex-direction: column;
            padding: 100px 0 20px 0;
            transform: translateX(100%); 
            transition: transform 0.4s ease;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1); 
            gap: 0;
            z-index: 1001; /* <-- TAMBAHKAN BARIS INI */
        }

            .nav-item a i {
                display: inline-block; /* Mengembalikan ikon agar terlihat */
                margin-right: 10px;   /* Memberi sedikit jarak antara ikon dan teks */
                width: 20px;          /* Menetapkan lebar agar teks lebih rapi */
            }

            .main-nav.active {
                transform: translateX(0);
            }

            .nav-item {
                width: 100%;
            }

            .nav-item a {
                display: block;
                padding: 1rem 2rem;
                border-radius: 0;
                border-left: 4px solid transparent;
            }

            .nav-item a:hover,
            .nav-item a.active {
                border-left-color: var(--primary-color);
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 2.5rem;
            }

            .nav-container {
                padding: 1rem;
            }

            .main-content {
                padding: 1rem;
                margin-top: 100px;
            }

            .menu-grid,
            .contact-grid,
            .feature-grid {
                grid-template-columns: 1fr;
            }

            .hero-section {
                padding: 3rem 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .hero-section {
                padding: 2rem 1rem;
            }

            .hero-title {
                font-size: 2rem;
            }

            .logo-text {
                font-size: 1.5rem;
            }

            .main-nav {
                width: 100%;
            }
        }
        @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
        }

        /* Sedikit penyempurnaan dari animasi slideUp yang ada */
        @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
        }

        /* Class untuk menerapkan animasi */
        .animate-fade-out {
        animation: fadeOut 0.4s ease-out forwards;
        }

        .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        }

        .feature-box {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .feature-box.in-view {
            opacity: 1;
            transform: translateY(0);
        }

        .feature-box:nth-child(1) { transition-delay: 0.1s; }
        .feature-box:nth-child(2) { transition-delay: 0.2s; }
        .feature-box:nth-child(3) { transition-delay: 0.25s; }
        .feature-box:nth-child(4) { transition-delay: 0.35s; }
        
        /* === STYLE KHUSUS UNTUK FORM KRITIK & SARAN === */

/* Wadah utama form */
#feedbackForm {
  background-color: #FFFFFF;
  padding: 2rem 2.5rem;
  border-radius: 15px;
  border-top: 4px solid var(--primary-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out;
}

#feedbackForm:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.09);
}

/* Label "Pesan Anda" */
#feedbackForm label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--dark-color);
}

/* Kotak input pesan (textarea) */
#feedbackMessage {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-dark);
  resize: vertical;
  min-height: 140px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box; /* Pastikan padding tidak menambah lebar */
}

/* Style untuk placeholder text */
#feedbackMessage::placeholder {
  color: #b0b0b0;
  font-style: italic;
}

/* Efek saat textarea diklik/aktif (efek glow) */
#feedbackMessage:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 4px rgba(210, 105, 30, 0.2);
}

/* Tombol Kirim */
#feedbackForm .cta-button {
  width: 100%;
  margin-top: 1rem; /* Beri jarak dari textarea */
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem; /* Jarak antara ikon dan teks */
}

@media (min-width: 769px) {

  /* 1. Sembunyikan tombol hamburger menu di desktop */
  .menu-toggle {
    display: none;
  }

  /* 2. Pastikan navigasi utama selalu terlihat dan horizontal */
  .main-nav {
    /* Hapus semua style mobile */
    position: static;
    transform: none;
    flex-direction: row;
    width: auto !important; /* !important untuk menimpa style inline dari JS */
    height: auto;
    background: none;
    backdrop-filter: none;
    box-shadow: none;
    padding: 0;
    
    /* Pastikan kembali ke layout flexbox desktop */
    display: flex;
    gap: 2rem; /* Sesuaikan gap jika perlu */
  }
  
  /* 3. Kembalikan style link navigasi seperti semula */
  .nav-item a {
      display: inline-block; /* Pastikan link tidak block-level */
      padding: 0.8rem 1.5rem;
      border-left: none; /* Hapus border kiri dari tampilan mobile */
  }

  /* 4. Sembunyikan ikon di samping link menu (jika masih muncul) */
  .nav-item a i {
    display: none;
  }
}
