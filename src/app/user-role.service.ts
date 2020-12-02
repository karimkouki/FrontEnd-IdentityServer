import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{User}  from '../app/user';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { UserRole } from './user-role';
import { from } from 'rxjs/observable/from';




@Injectable()
export class UserRoleService {
  private _UserRoleUrl = "http://localhost:5000/api/Default/liste1";
  private getusersRole="http://localhost:5000/api/Default"
  private UpdateUserRole="http://localhost:5000/api/Test";
  public headers = new Headers({'Content-Type':'application/json'});
  public options = new RequestOptions({headers:this.headers}); 
  private user = new User();
  private userRole =new UserRole();


  constructor(private http: HttpClient) { }


  getUserRole() {
    return this.http.get<any>(this._UserRoleUrl)
  }
  

  getUser(id:string){

    return this.http.get(this.getusersRole+'/'+id);
  }

  updateUser(userRole:UserRole){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'body'
    };
 

 

      return this.http.put(this.UpdateUserRole,JSON.stringify(userRole),httpOptions);
  }

  setter(user:User){
    this.user=user;
  }

 getter(){
   return this.user;
 }


 errorHandler(error:Response){

  return Observable.throw(error||"SERVER ERROR");
}




}
