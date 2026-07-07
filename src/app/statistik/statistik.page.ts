import { Component, OnInit } from '@angular/core';

import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-statistik',
  templateUrl: './statistik.page.html',
  styleUrls: ['./statistik.page.scss'],
  standalone:false
})

export class StatistikPage implements OnInit {

  jumlah:any = {};

  constructor(

    private postPvdr:PostProvider

  ) { }

  ngOnInit() {

    this.postPvdr.getData(

      'jumlah.php'

    ).subscribe((res:any)=>{

      this.jumlah = res;

      console.log(res);

    });

  }

}