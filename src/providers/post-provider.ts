import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PostProvider {

  server:string =
  'https://appaulianamira.si2023.site/api_ppdb/';

  constructor(
    public http:HttpClient
  ){}

  postData(body:any,file:string):Observable<any>{

    return this.http.post(
      this.server + file,
      body
    );

  }

  getData(file:string):Observable<any>{

    return this.http.get(
      this.server + file
    );

  }

  getFoto(foto:string){

    return this.server + 'upload/' + foto;

  }

}