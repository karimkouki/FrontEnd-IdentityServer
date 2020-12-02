import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{User}  from '../app/user';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



import { Router } from '@angular/router'

@Injectable()
export class AuthService {


  private _registerUrl = "http://localhost:5000/api/ApplicationUser/Register";
  private _loginUrl = "http://localhost:5000/api/ApplicationUser/Login";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user = new User();



  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }


  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }


  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

 setter(user:User){
  this.user=user;
}

getter(){
 return this.user;
}
}
