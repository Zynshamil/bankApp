import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  // Database
  database: any = {
    1000: { acno: 1000, uname: "sam", password: 1000, balance: 50000,transaction:[] },
    1001: { acno: 1001, uname: "saml", password: 1000, balance: 40000,transaction:[]},
    1002: { acno: 1002, uname: "samy", password: 1000, balance: 80000,transaction:[] }


  }
  constructor(private http:HttpClient) { 
     this.getDetais()
    
  }

  //  To save in localStorage

  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))

    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }

    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }

  }


  // to get details from Local storage

  getDetais(){
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
    }

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }

  }

 

  


  // register
  register(uname: any, acno: any, password: any) {
    // req body
    const data={
      uname,
      acno,
      password
    }
    // register API call
    return this.http.post('http://localhost:3000/register',data)
  }

  // login
   login(acno: any, pswd: any) {
  // user entered acno n password
    const data={
      acno,
      pswd
    }
  return this.http.post('http://localhost:3000/login',data)
  } 

  // Deposit
    deposit(acno:any,pswd:any,amount:any){
      
      const data={
        acno,
        pswd,
        amount
      }
    

    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
    }

    getOptions(){
        // to fetch token from local storage
    const token=JSON.parse(localStorage.getItem("token")||'')

    // Create http header
    let headers= new HttpHeaders()
    // add token to req header
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
    }

    // Withdraw
    withdraw(acno:any,pswd:any,amount:any){
      
      
        const data={
          acno,
          pswd,
          amount
        }
      
  
      return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
      }
    

// Transaction
 transaction(acno:any){
  const data={
    acno
  }
  return this.http.post('http://localhost:3000/transaction',data,this.getOptions()) }
}

