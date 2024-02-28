-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Feb 2024 pada 19.54
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_adosistering`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `sensorkelembaban`
--

CREATE TABLE `sensorkelembaban` (
  `id` int(11) NOT NULL,
  `KadarAir` float DEFAULT NULL,
  `Kelembaban` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sensorkelembaban`
--

INSERT INTO `sensorkelembaban` (`id`, `KadarAir`, `Kelembaban`, `createdAt`, `updatedAt`) VALUES
(1, 570, 45, '2024-02-28 16:49:03', '2024-02-28 16:49:03'),
(2, 570, 45, '2024-02-28 16:49:27', '2024-02-28 16:49:27'),
(3, 570, 45, '2024-02-28 16:49:31', '2024-02-28 16:49:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sensorwaterflow`
--

CREATE TABLE `sensorwaterflow` (
  `id` int(11) NOT NULL,
  `DebitAir` float DEFAULT NULL,
  `TotalAir` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sensorwaterflow`
--

INSERT INTO `sensorwaterflow` (`id`, `DebitAir`, `TotalAir`, `createdAt`, `updatedAt`) VALUES
(1, 0, 7953.6, '2024-02-28 16:49:03', '2024-02-28 16:49:03'),
(2, 0, 7953.6, '2024-02-28 16:49:27', '2024-02-28 16:49:27'),
(3, 0, 7953.6, '2024-02-28 16:49:31', '2024-02-28 16:49:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refreshToken` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `refreshToken`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2b$10$nNAM25gwVesLZrsegiDMcu50WA4BWjg3OAGX165qTCHI5Z4wZQ6GK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDkxNDAwMzUsImV4cCI6MTcwOTIyNjQzNX0.nemCpJaENb53wCmVKN3lnA6fpjFs46baCQ0is4tdCfI', '2024-02-28 17:06:45', '2024-02-28 17:07:15');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `sensorkelembaban`
--
ALTER TABLE `sensorkelembaban`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sensorwaterflow`
--
ALTER TABLE `sensorwaterflow`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `sensorkelembaban`
--
ALTER TABLE `sensorkelembaban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `sensorwaterflow`
--
ALTER TABLE `sensorwaterflow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
