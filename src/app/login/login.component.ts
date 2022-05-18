import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Parter"

  
  // registerForm Model
  loginForm = this.fb.group({

  
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })
  

  constructor(private router:Router,private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // acnoChange(event: any) {
  //   this.acno = event.target.value
  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  // }

  // using event binding using $event, Two way binding ngmodel
  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    if(this.loginForm.valid){
// call login in dataService-asynchronou

   this.ds.login(acno,pswd)
   .subscribe((result:any)=>{
    if(result){
      localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
      localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
      localStorage.setItem("token",JSON.stringify(result.token))
      alert("login successfull")
      this.router.navigateByUrl("dashboard")
    }
   },
   (result)=>{
     alert(result.error.message)
   }
   )}
 else{
   alert("invalid Form")
 }
}
}
  


  // }

  // using Template referencing variable

  // login(a:any,p:any) {
  //   var acno = a.value
  //   var pswd = p.value

  //   let database = this.database

  //   if (acno in database) {
  //     if (pswd == database[acno]["password"]) {
  //       alert("login success")
  //     }
  //     else {
  //       alert("invalid password")
  //     }
  //   }
  //   else{
  //     alert("user does not exist")
  //   }



  // }


