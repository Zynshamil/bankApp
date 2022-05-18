import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any
  logindate:any
  acno:any

  // registerForm Model
  depositForm = this.fb.group({

   
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
  })

  withdrawForm = this.fb.group({

   
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  })


  

  constructor(private ds:DataService, private fb:FormBuilder, private router:Router) {

    this.user=JSON.parse(localStorage.getItem('currentUser')||'')
    this.logindate= new Date()
    
  }

  ngOnInit(): void {
    // if(!localStorage.getItem("currentAcno")){
    //   alert("Please Login")
    //   this.router.navigateByUrl("")
    // }
  }


deposit(){
  var acno = this.depositForm.value.acno
  var pswd = this.depositForm.value.pswd
  var amount = this.depositForm.value.amount

  if(this.depositForm.valid){

    //  calling deposit in dataservice
 this.ds.deposit(acno,pswd,amount)
 .subscribe((result:any)=>{
  if(result){
    alert(result.message)
  }
 },
 (result)=>{
  alert(result.error.message)
 }
 )
 
}
else{
  alert("invalid form")
}

  }

   
withdraw(){

  var acno = this.withdrawForm.value.acno1
  var pswd = this.withdrawForm.value.pswd1
  var amount = this.withdrawForm.value.amount1

  if(this.withdrawForm.valid){

    //  calling withdraw in dataservice
    this.ds.withdraw(acno,pswd,amount)
    .subscribe((result:any)=>{
     if(result){
       alert(result.message)
     }
    },
    (result)=>{
     alert(result.error.message)
    }
    )
    
   }
   else{
     alert("invalid form")
   }
   
     }
// Logout

logout(){
  localStorage.removeItem("currentAcno")
  localStorage.removeItem("currentUser")
  this.router.navigateByUrl("")

}

// DeletefromParent()

deletefromParent(){
  this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
}

// onDelete

}
