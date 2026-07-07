import { Component, OnInit } from '@angular/core';

import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-data-siswa',
  templateUrl: './data-siswa.page.html',
  styleUrls: ['./data-siswa.page.scss'],
  standalone:false
})

export class DataSiswaPage implements OnInit {

  siswa:any=[];

  semuaSiswa:any=[];

  constructor(

    private postPvdr:PostProvider

  ) { }

  ngOnInit() {

    this.getSiswa();

  }

  // AMBIL DATA
  getSiswa(){

    this.postPvdr.getData(

      'tampil.php'

    ).subscribe((res:any)=>{

      console.log(res);

      this.siswa = res;

      this.semuaSiswa = res;

    });

  }

  fotoUrl(foto:any){

  return this.postPvdr.getFoto(foto);

}

  // SEARCH
  cari(event:any){

    const keyword =
    event.target.value.toLowerCase();

    this.siswa =
    this.semuaSiswa.filter((item:any)=>{

      return(

        item.nama.toLowerCase().includes(keyword) ||

        item.nisn.toLowerCase().includes(keyword) ||

        item.minat.toLowerCase().includes(keyword)

      );

    });

  }

  // HAPUS DATA
  hapus(id:any){

    this.postPvdr.getData(

      'hapus.php?id=' + id

    ).subscribe((res:any)=>{

      console.log(res);

      alert('Data Berhasil Dihapus');

      this.getSiswa();

    });

  }

  // EDIT DATA
  edit(item:any){

    let nama = prompt(
      'Edit Nama',
      item.nama
    );

    let nisn = prompt(
      'Edit NISN',
      item.nisn
    );

    let minat = prompt(
      'Edit Minat',
      item.minat
    );

    let hp = prompt(
      'Edit No HP',
      item.hp
    );

    this.postPvdr.getData(

      'edit.php?id='
      + item.id +
      '&nama=' + nama +
      '&nisn=' + nisn +
      '&minat=' + minat +
      '&hp=' + hp

    ).subscribe((res:any)=>{

      console.log(res);

      alert('Data Berhasil Di Edit');

      this.getSiswa();

    });

  }

}