import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false
})

export class Tab2Page {

  nama:any;
  nisn:any;
  nik:any;

  jk:any;

  tempat_lahir:any;
  tanggal_lahir:any;

  agama:any;
  status_anak:any;
  anakke:any;

  alamat:any;
  dusun:any;
  desa:any;
  kecamatan:any;
  kabupaten:any;
  kode_pos:any;

  hp:any;
  asal_sekolah:any;

  nama_ayah:any;
  nik_ayah:any;
  pendidikan_ayah:any;
  pekerjaan_ayah:any;
  penghasilan_ayah:any;
  hp_ortu:any;
  alamat_ortu:any;

  nama_ibu:any;
  nik_ibu:any;
  pendidikan_ibu:any;
  pekerjaan_ibu:any;
  penghasilan_ibu:any;

  nama_wali:any;
  nik_wali:any;
  pendidikan_wali:any;
  pekerjaan_wali:any;
  penghasilan_wali:any;
  alamat_wali:any;
  hp_wali:any;

  statuss:any = 'pending';
  minat:any;
  nilai_akhir:any;

  file:any;

  constructor(

    private postPvdr: PostProvider,
    private alert: AlertController

  ) {}

  ambilFoto(event:any){

    this.file = event.target.files[0];

    console.log(this.file);

  }

  async simpan(){

    let formData = new FormData();

    formData.append('nama', this.nama);
    formData.append('nisn', this.nisn);
    formData.append('nik', this.nik);

    formData.append('jk', this.jk);

    formData.append('tempat_lahir', this.tempat_lahir);
    formData.append('tanggal_lahir', this.tanggal_lahir);

    formData.append('agama', this.agama);
    formData.append('status_anak', this.status_anak);
    formData.append('anakke', this.anakke);

    formData.append('alamat', this.alamat);
    formData.append('dusun', this.dusun);
    formData.append('desa', this.desa);
    formData.append('kecamatan', this.kecamatan);
    formData.append('kabupaten', this.kabupaten);
    formData.append('kode_pos', this.kode_pos);

    formData.append('hp', this.hp);
    formData.append('asal_sekolah', this.asal_sekolah);

    formData.append('nama_ayah', this.nama_ayah);
    formData.append('nik_ayah', this.nik_ayah);
    formData.append('pendidikan_ayah', this.pendidikan_ayah);
    formData.append('pekerjaan_ayah', this.pekerjaan_ayah);
    formData.append('penghasilan_ayah', this.penghasilan_ayah);
    formData.append('hp_ortu', this.hp_ortu);
    formData.append('alamat_ortu', this.alamat_ortu);

    formData.append('nama_ibu', this.nama_ibu);
    formData.append('nik_ibu', this.nik_ibu);
    formData.append('pendidikan_ibu', this.pendidikan_ibu);
    formData.append('pekerjaan_ibu', this.pekerjaan_ibu);
    formData.append('penghasilan_ibu', this.penghasilan_ibu);

    formData.append('nama_wali', this.nama_wali);
    formData.append('nik_wali', this.nik_wali);
    formData.append('pendidikan_wali', this.pendidikan_wali);
    formData.append('pekerjaan_wali', this.pekerjaan_wali);
    formData.append('penghasilan_wali', this.penghasilan_wali);
    formData.append('alamat_wali', this.alamat_wali);
    formData.append('hp_wali', this.hp_wali);

    formData.append('minat', this.minat);
    formData.append('nilai_akhir', this.nilai_akhir);
    formData.append('statuss', this.statuss);

    formData.append('foto', this.file);

    this.postPvdr.postData(

      formData,

      'simpan.php'

    ).subscribe(

      async(data:any)=>{

        console.log(data);

        const alert =
        await this.alert.create({

          header:'BERHASIL 🎉',
          message:'Data berhasil disimpan',
          buttons:['OK']

        });

        await alert.present();

      },

      async(error:any)=>{

        console.log(error);

        const alert =
        await this.alert.create({

          header:'ERROR 😭',
          message: JSON.stringify(error),
          buttons:['OK']

        });

        await alert.present();

      }

    );

  }

}