import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators,AbstractControl,FormControl } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioR:FormGroup;
  email:string;
  password:string;
  
  propiedades:boolean = false ;

  constructor( private frmBuilder:FormBuilder,
               private authser:AuthService,
               private router: Router) {
                  function emailDomainValidator(control: FormControl) { 
                    let email = control.value; 
                    let [_, domain] = email.split("@"); 
                      console.log(domain)
                      if (domain !== "unisalle.edu.co") { 
                        return {
                          emailDomain: {
                            parsedDomain: domain
                          }
                        }
                      
                    }
                    return null; 
                  }

                 
    this.formularioR = this.frmBuilder.group({
      nombre: [ 'nombre', Validators.required],
      apellido: ['apellido', Validators.required],
      contra : [ 'Contrasea2*' , [Validators.required, Validators.minLength(8),Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      // correo : ['corre@unisalle.edu.co' ,[Validators.required,Validators.pattern("[^ @]*[@][^ @]*")]]
      correo : ['corre@unisalle.edu.co' ,[Validators.required,emailDomainValidator,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      terminos : [  , Validators.required,]
      
      
    })

    

    
    
    
    
  }
  
  onCheck(){
    var gol = this.formularioR.valid
    console.log("ohas")
  }
  
  onSumbit(parametro){
    
    this.email = this.formularioR.value.correo
    this.password = this.formularioR.value.contra
    console.log(this.email,this.password)
  }
  
  onSumitAddUser(){
    this.email = this.formularioR.value.correo
    this.password = this.formularioR.value.contra
    this.authser.registerUser(this.email,this.password)
    .then( (res) =>{
      // this.authser.logOut()
      this.router.navigate(['/login'])
    }).catch( (err) =>{
      console.log(err)
    });
  }
  ngOnInit() {

    
    
  }

}
