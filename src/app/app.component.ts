import { Component } from '@angular/core';
import { VenkatService } from './venkat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  public employees;
  public dataFilter={title:""};
  constructor(private vs:VenkatService){

  }
  ngOnInit(){
    return this.vs.getData().subscribe(data=>{
      this.employees=data
    })

  }
}
