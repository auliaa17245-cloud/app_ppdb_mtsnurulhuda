<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include "koneksi.php";

$total = $pdo->query(
"SELECT COUNT(*) as jumlah FROM siswa"
)->fetch(PDO::FETCH_ASSOC);

$diterima = $pdo->query(
"SELECT COUNT(*) as jumlah FROM siswa
WHERE statuss='diterima'"
)->fetch(PDO::FETCH_ASSOC);

$ditolak = $pdo->query(
"SELECT COUNT(*) as jumlah FROM siswa
WHERE statuss='ditolak'"
)->fetch(PDO::FETCH_ASSOC);

$pending = $pdo->query(
"SELECT COUNT(*) as jumlah FROM siswa
WHERE statuss='pending'"
)->fetch(PDO::FETCH_ASSOC);

echo json_encode([

  "total" => $total['jumlah'],
  "diterima" => $diterima['jumlah'],
  "ditolak" => $ditolak['jumlah'],
  "pending" => $pending['jumlah']

]);

?>