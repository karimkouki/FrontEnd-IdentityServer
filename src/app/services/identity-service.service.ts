import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { HttpClient } from '@angular/common/http';
import{IdentityClaims}  from '../identity-claims';

@Injectable()

export class IdentityServiceService {
private _IdentityListUrl ="http://localhost:5000/api/Identity"
private _IdentityClaimsListUrl ="http://localhost:5000/api/IdentityClaims"
private _IdentityClaimsUpdateUrl ="http://localhost:5000/api/IdentityClaims"  
private IdentityClaims =  new IdentityClaims ();

constructor(private http: HttpClient) { }
  getEvents() {
    return this.http.get<any>(this._IdentityListUrl)
  }
  

 getIdentityClaims() {
  return this.http.get<any>(this._IdentityClaimsListUrl)
}


updateUser(IdentityClaims:IdentityClaims){

  //return this.http.put(this._userUpdate+'/'+user,JSON.stringify(user));
  return this.http.put(this._IdentityClaimsUpdateUrl+'/'+IdentityClaims.id,JSON.stringify(IdentityClaims));
  


}





errorHandler(error:Response){

  return Observable.throw(error||"SERVER ERROR");
} 

setter(IdentityClaims:IdentityClaims){
  this.IdentityClaims=IdentityClaims;
}

getter(){
 return this.IdentityClaims;
}


}
