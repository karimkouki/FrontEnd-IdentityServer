import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

import { HttpClient } from '@angular/common/http';
import{User}  from '../app/user';


@Injectable()
export class EventService {

  private _eventsUrl = "http://localhost:5000/api/Default/liste";
  private _specialEventsUrl = "http://localhost:5000/api/special";
  private _userDelete="http://localhost:5000/api/ApplicationUser";
  private _userUpdate="http://localhost:5000/api/ApplicationUser";
  private _userProfile="http://localhost:5000/api/UserProfile";
  private _userProfile1="hhttp://localhost:5000/api/ApplicationUserModels";
 
 
  private user = new User();

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getUserProfile() {
    return this.http.get<any>(this._userProfile)
  }





  getUserProfile1() {
    return this.http.get<any>(this._userProfile)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }
  deleteUser(id:string){

    return this.http.delete(this._userDelete+'/'+id)
  }

  updateUser(user:User){

    //return this.http.put(this._userUpdate+'/'+user,JSON.stringify(user));
    return this.http.put(this._userUpdate+'/'+user.UserName,JSON.stringify(user));
    
  
  
  }


  
  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 } 

  setter(user:User){
    this.user=user;
  }

 getter():User{
   return this.user;
 }


}
