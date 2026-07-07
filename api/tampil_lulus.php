<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include "koneksi.php";

$sql = "SELECT * FROM siswa
WHERE statuss='diterima'
ORDER BY nilai_akhir DESC";

$stmt = $pdo->prepare($sql);

$stmt->execute();

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);

?>