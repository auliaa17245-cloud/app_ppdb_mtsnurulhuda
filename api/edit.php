<?php

header("Access-Control-Allow-Origin: *");

include "koneksi.php";

$id     = $_GET['id'];
$nama   = $_GET['nama'];
$nisn   = $_GET['nisn'];
$minat  = $_GET['minat'];

$sql = "UPDATE siswa SET

nama=?,
nisn=?,
minat=?

WHERE id=?";

$stmt = $pdo->prepare($sql);

$stmt->execute([

  $nama,
  $nisn,
  $minat,
  $id

]);

echo json_encode([

  "pesan" => "berhasil"

]);

?>