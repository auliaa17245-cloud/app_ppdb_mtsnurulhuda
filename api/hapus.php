<?php

header("Access-Control-Allow-Origin: *");

include "koneksi.php";

$id = $_GET['id'];

$sql = "DELETE FROM siswa WHERE id=?";

$stmt = $pdo->prepare($sql);

$stmt->execute([$id]);

echo json_encode([
  "pesan"=>"berhasil"
]);

?>