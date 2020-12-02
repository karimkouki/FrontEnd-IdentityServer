import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
   if ( this._auth.loggedIn())
   {
     this._router.navigate(['Profile'])
   }
  }



  
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
       localStorage.setItem('username',res.username)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/Profile'])
        
      },

      
      err => console.log(err)
      
      
      
    ) 

    if ((localStorage.getItem('token'))) {
      console.log("zzz")
       
    }
  }

  register () {
  this._router.navigate(['register'])
  }



  show: boolean = true;
 

}
