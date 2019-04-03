import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators,AbstractControl,FormControl } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioL:FormGroup;
  email:string;
  password:string;
  user;
  constructor(private frmBuilder:FormBuilder,private auth:AuthService,
    private router: Router) { 
    this.formularioL = this.frmBuilder.group({
      
      contra : [],
      // correo : ['corre@unisalle.edu.co' ,[Validators.required,Validators.pattern("[^ @]*[@][^ @]*")]]
      correo : [],
    
      
    })
  }

  ngOnInit() {
  }

  loginEmail(){
    this.email = this.formularioL.value.correo
    this.password = this.formularioL.value.contra
    this.auth.loginEmail(this.email,this.password)
    .then( (res) => {
      this.auth.getUserEmailVeri()
      .subscribe( data => {
        if(!data){
          this.user = this.auth.sendEmailVeri()
          this.user.sendEmailVerification()
           .then( () => {
            console.log("correo enviado ")
           })
          
        }
        else(
          console.log("correo verificado")
        )
      })
      this.router.navigate(['/home'])

    }).catch( (err) => {
      console.log(err);
    });
    
  }

}
