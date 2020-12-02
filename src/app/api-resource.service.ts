import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import {HttpHeaders} from '@angular/common/http'

@Injectable()
export class ApiResourceService {
  private _APiScopes ="http://localhost:5000/api/ApiResource/";
  private _apiResource = "http://localhost:5000/api/ApiResource";
private _addScopes="http://localhost:5000/api/ApiResource/ApiScopePost";
  constructor(private http: HttpClient,
    private _router: Router) { }
    private user = new Array();



    ListApi() {
      return this.http.get<any>(this._apiResource)
    }

    ListAPiScopes(id:string){

      return this.http.get(this._APiScopes+id)
    }





    
    addressourece(role:any) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response' as 'body'
      };
      return this.http.post<any>(this._apiResource,JSON.stringify(role),httpOptions)
    }





    deleteUser(id:Number){

      return this.http.delete(this._apiResource+'/'+id)
    }



    addScoopes(role:any){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response' as 'body'
      };
      return this.http.post<any>(this._addScopes,JSON.stringify(role),httpOptions)
    }


    getter():any{
      return this.user;
    }
  }
