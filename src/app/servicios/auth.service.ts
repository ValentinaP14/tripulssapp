import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth) { 

  }
  registerUser(email:string , pass:string){
    return new Promise((resolve,reject) =>{
      this.auth.auth.createUserWithEmailAndPassword(email,pass)
       .then( userData =>  resolve(userData), err => reject(err));
    })

  }

  loginEmail(email:string , pass:string){
   return new Promise((resolve,reject) =>{
     this.auth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData =>  resolve(userData), err => reject(err));
   })

 }

  logOut(){
    return this.auth.auth.signOut();
  }

  getAuth(){
    return this.auth.authState.pipe(map( auth => auth));
  }

  getUserEmailVeri(){
    return this.auth.authState.pipe( map ( data => data.emailVerified))
  }
  sendEmailVeri(){
    return this.auth.auth.currentUser
  }
 
}
