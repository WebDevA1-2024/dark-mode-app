## Deskripsi Eksperimen
Eksperimen ini melibatkan pengembangan aplikasi web menggunakan Next.js yang menerapkan fitur dark mode. Dark mode diimplementasikan menggunakan CSS Variables dan React Context API, memungkinkan pengguna untuk dengan mudah beralih antara mode terang (light mode) dan gelap (dark mode). Dengan integrasi Tailwind CSS, aplikasi ini memanfaatkan utilitas CSS untuk styling yang efisien dan responsif.

## Problem dan Solusi

Problem: Pengguna sering kali merasa kurang nyaman dengan satu mode tampilan pada aplikasi, terutama ketika bekerja dalam kondisi pencahayaan yang berbeda. Dark mode menjadi fitur yang semakin populer karena dapat mengurangi kelelahan mata dalam kondisi pencahayaan rendah. Tantangan dalam eksperimen ini adalah bagaimana mengimplementasikan dark mode yang efektif dan responsif, serta memastikan transisi antara mode terang dan gelap berjalan lancar.

Solusi: Untuk mengatasi masalah ini, CSS Variables digunakan untuk mendefinisikan warna latar belakang dan teks yang berbeda untuk light mode dan dark mode. React Context API digunakan untuk mengelola state tema secara global di seluruh aplikasi, memungkinkan pengguna untuk beralih antara light mode dan dark mode dengan mengklik sebuah tombol. Tailwind CSS mempermudah styling button dengan menggunakan utilitas CSS dan memastikan desain yang responsif.
