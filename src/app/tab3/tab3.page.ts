import { Component, OnInit } from '@angular/core';

import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone:false
})

export class Tab3Page implements OnInit {

  siswa:any=[];

  constructor(

    private postPvdr:PostProvider

  ) { }

  ngOnInit() {

    this.tampil();

  }

  tampil(){

    this.postPvdr.getData(

      'tampil_lulus.php'

    ).subscribe((data:any)=>{

      this.siswa = data;

      console.log(data);

    });

  }
fotoUrl(foto:any){

  return this.postPvdr.getFoto(foto);

}


}