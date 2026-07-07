<?php

header("Access-Control-Allow-Origin: *");

include "koneksi.php";

$sql = "SELECT * FROM siswa ORDER BY id DESC";

$stmt = $pdo->prepare($sql);

$stmt->execute();

$data = $stmt->fetchAll();

echo json_encode($data);

?>