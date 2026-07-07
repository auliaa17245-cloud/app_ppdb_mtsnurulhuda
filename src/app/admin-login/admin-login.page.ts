import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
  standalone: false
})

export class AdminLoginPage {

  username: any;
  password: any;

  constructor(

    private router: Router,

    private alert: AlertController,

    private postPvdr: PostProvider

  ) { }

  async login() {

    let body = {

      username: this.username,

      password: this.password

    };

    this.postPvdr.postData(

      body,

      'login.php'

    ).subscribe(

      async (data: any) => {

        console.log(data);

        if (data.success) {

          // SIMPAN STATUS LOGIN
          localStorage.setItem('login', 'true');

          const alert = await this.alert.create({

            header: 'BERHASIL 🎉',

            message: 'Login Berhasil',

            buttons: [{
              text: 'OK',
              handler: () => {

                this.router.navigate(['/admin-dashboard']);

              }
            }]

          });

          await alert.present();

        } else {

          const alert = await this.alert.create({

            header: 'GAGAL 😭',

            message: 'Username atau Password Salah',

            buttons: ['OK']

          });

          await alert.present();

        }

      },

      async (error: any) => {

        console.log(error);

        const alert = await this.alert.create({

          header: 'ERROR 😭',

          message: 'Tidak dapat terhubung ke server',

          buttons: ['OK']

        });

        await alert.present();

      }

    );

  }

}