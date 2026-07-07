<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");

include "koneksi.php";



$nama             = $_POST['nama'] ?? '';
$nisn             = $_POST['nisn'] ?? '';
$nik              = $_POST['nik'] ?? '';

$tempat_lahir     = $_POST['tempat_lahir'] ?? '';
$tanggal_lahir    = $_POST['tanggal_lahir'] ?? '';

$jk               = $_POST['jk'] ?? '';
$agama            = $_POST['agama'] ?? '';
$status_anak      = $_POST['status_anak'] ?? '';
$anakke            = $_POST['anakke'] ?? '';

$alamat           = $_POST['alamat'] ?? '';
$dusun            = $_POST['dusun'] ?? '';
$desa             = $_POST['desa'] ?? '';
$kecamatan        = $_POST['kecamatan'] ?? '';
$kabupaten        = $_POST['kabupaten'] ?? '';
$kode_pos         = $_POST['kode_pos'] ?? '';

$hp               = $_POST['hp'] ?? '';
$asal_sekolah     = $_POST['asal_sekolah'] ?? '';



$nama_ayah        = $_POST['nama_ayah'] ?? '';
$nik_ayah         = $_POST['nik_ayah'] ?? '';
$pendidikan_ayah  = $_POST['pendidikan_ayah'] ?? '';
$pekerjaan_ayah   = $_POST['pekerjaan_ayah'] ?? '';
$penghasilan_ayah = $_POST['penghasilan_ayah'] ?? '';
$hp_ortu          = $_POST['hp_ortu'] ?? '';
$alamat_ortu      = $_POST['alamat_ortu'] ?? '';


$nama_ibu         = $_POST['nama_ibu'] ?? '';
$nik_ibu          = $_POST['nik_ibu'] ?? '';
$pendidikan_ibu   = $_POST['pendidikan_ibu'] ?? '';
$pekerjaan_ibu    = $_POST['pekerjaan_ibu'] ?? '';
$penghasilan_ibu  = $_POST['penghasilan_ibu'] ?? '';



$nama_wali        = $_POST['nama_wali'] ?? '';
$nik_wali         = $_POST['nik_wali'] ?? '';
$pendidikan_wali   = $_POST['pendidikan_wali'] ?? '';
$pekerjaan_wali   = $_POST['pekerjaan_wali'] ?? '';
$penghasilan_wali   = $_POST['penghasilan_wali'] ?? '';
$alamat_wali      = $_POST['alamat_wali'] ?? '';
$hp_wali          = $_POST['hp_wali'] ?? '';


$minat = $_POST['minat'] ?? '';
$nilai_akhir = $_POST['nilai_akhir'] ?? '';
$statuss = $_POST['statuss'] ?? 'pending';



$nama_foto = '';

if(isset($_FILES['foto']) && $_FILES['foto']['error'] == 0){

    $ekstensi = strtolower(pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION));

    $allowed = ['jpg', 'jpeg', 'png'];

    if(!in_array($ekstensi, $allowed)){
        die("Format foto harus JPG, JPEG, atau PNG");
    }

    $nama_foto = date('YmdHis') . '_' . rand(1000,9999) . '.' . $ekstensi;

    $tmp = $_FILES['foto']['tmp_name'];

    move_uploaded_file(
        $tmp,
        "upload/".$nama_foto
    );
}



$sql = "INSERT INTO siswa(

nama,
nisn,
nik,
jk,
tempat_lahir,
tanggal_lahir,
agama,
status_anak,
anakke,

alamat,
dusun,
desa,
kecamatan,
kabupaten,
kode_pos,

hp,
asal_sekolah,

nama_ayah,
nik_ayah,
pendidikan_ayah,
pekerjaan_ayah,
penghasilan_ayah,
hp_ortu,
alamat_ortu,

nama_ibu,
nik_ibu,
pendidikan_ibu,
pekerjaan_ibu,
penghasilan_ibu,

nama_wali,
nik_wali,
pendidikan_wali,
pekerjaan_wali,
penghasilan_wali,
alamat_wali,
hp_wali,

foto,
minat,
nilai_akhir,
statuss

)

VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
";

$stmt = $pdo->prepare($sql);

$save = $stmt->execute([

    $nama,
    $nisn,
    $nik,
    $jk,
    $tempat_lahir,
    $tanggal_lahir,
    $agama,
    $status_anak,
    $anakke,  

    $alamat,
    $dusun,
    $desa,
    $kecamatan,
    $kabupaten,
    $kode_pos,

    $hp,
    $asal_sekolah,

    $nama_ayah,
    $nik_ayah,
    $pendidikan_ayah,
    $pekerjaan_ayah,
    $penghasilan_ayah,
    $hp_ortu,
    $alamat_ortu,

    $nama_ibu,
    $nik_ibu,
    $pendidikan_ibu,
    $pekerjaan_ibu,
    $penghasilan_ibu,

    $nama_wali,
    $nik_wali,
    $pendidikan_wali,
    $pekerjaan_wali,
    $penghasilan_wali,
    $alamat_wali,
    $hp_wali,

    $nama_foto,
    $minat,
    $nilai_akhir,
    $statuss

]);

if($save){

    header('Content-Type: application/json');

    echo json_encode([

        "success" => true,
        "message" => "Data berhasil disimpan"

    ]);

}else{

    header('Content-Type: application/json');

    echo json_encode([

        "success" => false,
        "message" => "Data gagal disimpan"

    ]);

}

?>