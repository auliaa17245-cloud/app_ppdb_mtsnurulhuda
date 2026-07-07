import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-admin-formulir',
  templateUrl: './admin-formulir.page.html',
  styleUrls: ['./admin-formulir.page.scss'],
  standalone: false
})
export class AdminFormulirPage implements OnInit {

  data: any = [];

  constructor(
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {

    this.tampilData();

  }

  tampilData() {

    this.postPvdr.getData(
      'tampil_formulir.php'
    ).subscribe((res: any) => {

      this.data = res;

      console.log(this.data);

    });

  }

  // ===== TAMBAHKAN INI =====
  fotoUrl(foto: any) {

    return this.postPvdr.getFoto(foto);

  }

  // =========================

  terima(id: any) {

    let formData = new FormData();

    formData.append('id', id);
    formData.append('statuss', 'diterima');

    this.postPvdr.postData(
      formData,
      'verifikasi.php'
    ).subscribe((res: any) => {

      this.tampilData();

    });

  }

  tolak(id: any) {

    let formData = new FormData();

    formData.append('id', id);
    formData.append('statuss', 'ditolak');

    this.postPvdr.postData(
      formData,
      'verifikasi.php'
    ).subscribe((res: any) => {

      this.tampilData();

    });

  }

}