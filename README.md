# Mentari Turu 🌞

![Preview Mentari Mod](background/tes.png)

**Mentari Mod** adalah ekstensi Google Chrome sederhana yang dirancang untuk memodifikasi tampilan halaman login dan dashboard portal [Mentari UNPAM](https://mentari.unpam.ac.id/). Ekstensi ini mengganti background default dan melakukan penyesuaian gaya visual agar tampilan lebih segar dan menarik.

## ✨ Fitur Utama

*   **Custom Background**: Mengganti gambar latar belakang bawaan dengan gambar kustom yang lebih estetik.
*   **Element Styling**: Menyesuaikan gaya elemen typography (H5) agar lebih rapi.
*   **Image Replacement**: Mengganti atau menyembunyikan aset gambar tertentu (seperti `PersonLearn`) untuk tampilan yang lebih bersih.
*   **Auto-Update**: Script berjalan secara otomatis menggunakan interval untuk memastikan elemen tetap terganti meskipun halaman direfresh atau dimuat ulang secara dinamis.

## 💻 Teknologi yang Digunakan

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)



## �🚀 Cara Instalasi

Ikuti langkah-langkah berikut untuk memasang ekstensi ini di browser Chrome, Edge, atau browser berbasis Chromium lainnya:

1.  **Download Source Code**:
    *   Clone repository ini atau download sebagai ZIP dan ekstrak ke folder di komputer Anda.

2.  **Buka Halaman Ekstensi**:
    *   Buka browser dan navigasi ke `chrome://extensions/` (atau `edge://extensions/` untuk Edge).

3.  **Aktifkan Developer Mode**:
    *   Cari toogle **"Developer mode"** di pojok kanan atas dan aktifkan.

4.  **Load Unpacked**:
    *   Klik tombol **"Load unpacked"**.
    *   Pilih folder `Mentari` (folder dimana file `manifest.json` berada).

5.  **Selesai!**:
    *   Ekstensi sekarang aktif. Buka atau refresh halaman [Mentari UNPAM](https://mentari.unpam.ac.id/) untuk melihat perubahannya.

## 🛠️ Struktur File

*   `manifest.json`: Konfigurasi utama ekstensi.
*   `home.js`: Script utama yang melakukan manipulasi DOM.
*   `background/`: Folder aset gambar.
*   `logo.png`: Ikon ekstensi.

## 📝 Catatan

*   Pastikan file gambar yang direferensikan di `home.js` (misalnya `background/columbina.png`) tersedia di dalam folder `background/` dan terdaftar di `web_accessible_resources` dalam `manifest.json`.
*   Ekstensi ini hanya bekerja pada domain `mentari.unpam.ac.id` sesuai konfigurasi manifest.
