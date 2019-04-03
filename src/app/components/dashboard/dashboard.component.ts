import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userverifi:boolean ;
  constructor( private auth:AuthService) {
    this.userverifi =true
    this.auth.getUserEmailVeri()
    .subscribe( data =>{
      this.userverifi = data;
    })
   }

  ngOnInit() {
  }

}
