import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpHeaders} from '@angular/common/http'

import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import{Client} from '../client';
import {ClientRedirectUri} from '../class/client-redirect-uri'
  import { from } from 'rxjs/observable/from';
@Injectable()
export class ClientServiceService {
private _ClientsList ="http://localhost:5000/api/Clients";
private _clientAddUrl="http://localhost:5000/api/Clients"; 
private _RedirectUris ="http://localhost:5000/api/RedirectUris";





private clientRedirectUri = new ClientRedirectUri();

private client = new  Client();
private headers = new Headers({'Content-Type':'application/json'});

constructor(private http:HttpClient) {}


    getClientsListe() {
      return this.http.get<any>(this._ClientsList)
    }
    

    registerUser(client) {
      return this.http.post<any>(this._clientAddUrl, client)
    }
    

    updateClient(client) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response' as 'body'
      };
      console.log(client)
      return this.http.put(this._clientAddUrl+'/'+client.id,JSON.stringify(client),httpOptions);
    }

    ListDataS(id:number){

      return this.http.get(this._RedirectUris+'/'+id)
    }

    ClientProfil(id:number){

      return this.http.get(this._clientAddUrl+'/'+id)
    }


    createUser(user:ClientRedirectUri){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response' as 'body'
      };
      return this.http.post(this._RedirectUris,JSON.stringify(user),httpOptions);
    }


    updateUris(user:ClientRedirectUri){


      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response' as 'body'
      };
console.log("ouiii")
console.log(user.clientID)
      //return this.http.put(this._userUpdate+'/'+user,JSON.stringify(user));
      return this.http.put(this._RedirectUris+'/'+user.clientID ,JSON.stringify(user),httpOptions);
      
    
    
    }



    deleteUser(id:string){

      return this.http.delete(this._ClientsList+'/'+id)
    }  
    setter(client:Client){
      this.client=client;
    }
  
   getter():Client{
     return this.client;
   }
}
