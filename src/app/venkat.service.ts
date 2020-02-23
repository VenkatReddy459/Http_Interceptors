import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenkatService {

  constructor(private http:HttpClient) { }

  getData(){

    const headers=new HttpHeaders({
      "name":"venkat"
    })
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{headers:headers})
  }
}
