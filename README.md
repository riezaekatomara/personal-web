# Personal Web Portfolio

Sebuah website portfolio personal yang dibangun dengan teknologi modern untuk menampilkan profil, proyek, dan keterampilan saya.

## 🚀 Demo

[Live Demo](https://riezaekatomara.web.app)

## 📋 Fitur

- **Responsive Design** - Tampilan optimal di semua perangkat
- **Modern UI/UX** - Interface yang clean dan user-friendly
- **Smooth Animations** - Animasi yang halus dan engaging
- **Interactive Components** - Komponen yang interaktif dan dinamis
- **Project Showcase** - Galeri proyek dengan detail lengkap
- **Contact Form** - Formulir kontak yang fungsional
- **Fast Loading** - Optimasi performa untuk loading cepat

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Runtime**: Node.js

## 📁 Struktur Proyek

```
personal-web/
├── public/
│   └── assets/
│       ├── proyek/          # Asset gambar proyek
│       └── tools/           # Asset gambar tools/teknologi
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── HeroSection.jsx  # Hero/landing section
│   │   ├── Tentang.jsx      # About section
│   │   ├── Proyek.jsx       # Projects section
│   │   ├── ProjectCard.jsx  # Individual project card
│   │   ├── Tools.jsx        # Skills/tools section
│   │   ├── Kontak.jsx       # Contact section
│   │   └── PreLoader.jsx    # Loading screen
│   ├── hooks/
│   │   └── useScrollReveal.js # Custom hook untuk scroll animations
│   ├── data/
│   │   └── data.js          # Data proyek dan konten
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── animations.css       # Custom animations
└── index.html               # HTML template
```

## 🚦 Getting Started

### Prerequisites

Pastikan Anda sudah menginstall:

- [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
- npm atau yarn

### Installation

1. Clone repository ini:

```bash
git clone https://github.com/riezaekatomara/personal-web.git
```

2. Masuk ke direktori proyek:

```bash
cd personal-web
```

3. Install dependencies:

```bash
npm install
```

4. Jalankan development server:

```bash
npm run dev
```

5. Buka browser dan akses `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint untuk code quality

## 🎨 Customization

### Mengubah Konten

Edit file `src/data/data.js` untuk mengubah:

- Informasi personal
- Daftar proyek
- Skills dan tools
- Kontak informasi

### Mengubah Styling

- **Global styles**: Edit `src/index.css`
- **Animations**: Modify `src/animations.css`
- **Component styles**: Gunakan Tailwind classes di masing-masing component

### Menambah Asset

- **Project images**: Tambahkan ke `public/assets/proyek/`
- **Tool icons**: Tambahkan ke `public/assets/tools/`

## 🌟 Fitur Utama

### Scroll Reveal Animation

Menggunakan custom hook `useScrollReveal` untuk animasi elemen saat scroll.

### Responsive Navigation

Navbar yang responsive dengan mobile menu.

### Project Gallery

Showcase proyek dengan gambar, deskripsi, dan link.

### Contact Section

Formulir kontak untuk memudahkan komunikasi.

## 📱 Responsive Design

Website ini dioptimalkan untuk:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🤝 Contributing

Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Kontak

**Rieza Eka Tomara**

- Email: [riezaekatomara@gmail.com](riezaekatomara@example.com)
- LinkedIn: [@riezaekatomara](https://linkedin.com/in/riezaekatomara/)
- GitHub: [@riezaekatomara](https://github.com/riezaekatomara)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)

---

⭐ Jangan lupa beri star jika proyek ini membantu Anda!
