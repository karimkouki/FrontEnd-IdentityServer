import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Role} from '../role';
import { Router } from '@angular/router';
import{Observable}   from 'rxjs/Observable';
@Injectable()
export class RoleService {

private _RoleList ="http://localhost:5000/api/UserManagement";
private _AddRole ="http://localhost:5000/api/UserManagement";
private _UpdateRole ="http://localhost:5000/api/UserManagement";
private _DeleteRole ="http://localhost:5000/api/UserManagement";
private role = new  Role();
private headers = new Headers({'Content-Type':'application/json'});

private options = new RequestOptions({headers:this.headers});
 
  constructor(private http:HttpClient) { }

  getRolesListe() {
    return this.http.get<any>(this._RoleList)
  }
  registerRole(role:Role) {
    console.log(role)
    return this.http.post<any>(this._AddRole,this.role);
  }


  updateRole(role:Role){

    //return this.http.put(this._userUpdate+'/'+user,JSON.stringify(user));
    return this.http.put(this._UpdateRole+'/',JSON.stringify(role));
    
  
  
  }



  getUser(id:string){

    return this.http.get(this._RoleList+'/'+id)
  }
 
  


  deleteUser(id:Number){

    return this.http.delete(this._DeleteRole+'/'+id)
  }


  



  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }


  setter(role:Role){
    this.role=role;
  }

 getter():Role{
   return this.role;
 }


}
