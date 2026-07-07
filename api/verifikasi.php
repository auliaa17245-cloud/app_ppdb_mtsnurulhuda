<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include "koneksi.php";

$id = $_POST['id'];
$statuss = $_POST['statuss'];

$sql = "UPDATE siswa
SET statuss=?
WHERE id=?";

$stmt = $pdo->prepare($sql);

$update = $stmt->execute([

    $statuss,
    $id

]);

if($update){

    echo json_encode([

        'pesan'=>'berhasil'

    ]);

}else{

    echo json_encode([

        'pesan'=>'gagal'

    ]);

}

?>