<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}


include "koneksi.php";

$postjson = json_decode(
    file_get_contents("php://input"),
    true
);

$username = $postjson['username'] ?? '';
$password = md5($postjson['password'] ?? '');


$sql = $pdo->prepare(

"SELECT * FROM admin
WHERE username = ?
AND password = ?"

);


$sql->execute([

    $username,
    $password

]);

$data = $sql->fetch();



if($data){

    echo json_encode([

        'success' => true,
        'msg' => 'Login berhasil'

    ]);

}else{

    echo json_encode([

        'success' => false,
        'msg' => 'Username atau Password Salah'

    ]);

}