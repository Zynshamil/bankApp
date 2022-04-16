import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Parter"
  acno = ""
  pswd = ""

  // database

  database: any = {
    1000: { acno: 1000, uname: "sam", password: 1000, balance: 50000 },
    1001: { acno: 1001, uname: "saml", password: 1000, balance: 40000 },
    1002: { acno: 1002, uname: "samy", password: 1000, balance: 80000 },


  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {
    this.acno = event.target.value
  }
  pswdChange(event: any) {
    this.pswd = event.target.value
  }

// using event binding using $event
// login() {
  //   var acno = this.acno
  //   var pswd = this.pswd

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

  // using Template referencing variable

  login(a:any,p:any) {
    var acno = a.value
    var pswd = p.value

    let database = this.database

    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        alert("login success")
      }
      else {
        alert("invalid password")
      }
    }
    else{
      alert("user does not exist")
    }



  }

}
