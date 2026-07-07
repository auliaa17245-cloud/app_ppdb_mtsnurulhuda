import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone:false
})

export class Tab1Page implements OnInit {

  total:any;

  constructor(

    private http:HttpClient

  ) {}

  ngOnInit(){

    this.jumlah();

  }

  jumlah(){

    this.http.get(

      'http://appaulianamira.si2023.site/jumlah.php'

    ).subscribe((data:any)=>{

      this.total = data.total;

      console.log(data);

    });

  }

}