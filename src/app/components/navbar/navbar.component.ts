import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userstatus:boolean = false;
  constructor(private auth:AuthService,
    private router:Router,) { 
      this.auth.getAuth().subscribe( auth => {
        if(auth){
          this.userstatus=true;
        }
        if(!auth){
          this.userstatus = false
        }
        else{
          
        }  
      });
    }

  ngOnInit() {
  }

  closeUser(){
    this.auth.logOut();
    this.router.navigate(['/home'])
  }

}
