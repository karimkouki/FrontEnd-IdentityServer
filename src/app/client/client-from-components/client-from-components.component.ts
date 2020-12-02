import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ClientServiceService} from '../../services/client-service.service'
import{Client} from '../../client'

@Component({
  selector: 'app-client-from-components',
  templateUrl: './client-from-components.component.html',
  styleUrls: ['./client-from-components.component.css']
})
export class ClientFromComponentsComponent implements OnInit {
private client: Client;


  constructor( private _serviceClient :ClientServiceService
   , private  _router:Router) { }

  ngOnInit() {
    this.client=this._serviceClient.getter();

  }
  registerUser() {
    if(this.client.clientId!=undefined){
      console.log(this.client)
    this._serviceClient.registerUser(this.client)
    
    .subscribe(
      res => {
       
        this._router.navigate(['/ClientList'])
      },
    
      err => console.log(err)
    )      
  }
  else{
    
    this._serviceClient.updateClient(this.client).subscribe((client)=>{
      console.log(client);
      this._router.navigate(['/ClientList']);
    },(error)=>{
      console.log(error);
    });
  }
  }





  processForm(){
    if(this.client.clientId==undefined){
       this._serviceClient.registerUser(this.client).subscribe((client)=>{
         console.log(client);
         this._router.navigate(['/ClientList']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._serviceClient.updateClient(this.client).subscribe((client)=>{
         console.log(client);
         this._router.navigate(['/ClientList']);
       },(error)=>{
         console.log(error);
       });
    }
  }


}
