import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ClientServiceService} from '../../services/client-service.service';
import{Router}  from '@angular/router';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit {
  @Output() alerteCanicule = new EventEmitter<any>();
  onTemperatureRises() {
    this.alerteCanicule.emit();  // Déclenche l'output
    console.log("ouiii")
  }
  constructor(private route: ActivatedRoute,private _route :Router,
    private _ClientServiceService: ClientServiceService) { }
  id: number;
  redirectUri: any;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this._ClientServiceService.ListDataS(this.id).subscribe((data)=>{
if(data[0]){
  console.log(data)
      this.redirectUri = data;
    } else{
       const obj: any={
        id : 0,
        redirectUri: "",
     clientID : this.id,
     x : false
  
     };
       
this.redirectUri = obj;
console.log(this.redirectUri)

    }
      console.log(data[0]);
    },(error)=>{
      console.log(error);
    });
    
  }

/*
  updateData(user){  
    console.log(user);
    this._ClientServiceService.updateUris(user).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{console.log(error);});

    this._route.navigate(['/ClientList']) .then(() => {
      window.location.reload();
    });
    
  }
 */



  processForm(){
    if(this.redirectUri.id==0){
     
      const obj: any={
       
        redirectUri: this.redirectUri.redirectUri,
     clientID : this.redirectUri.clientID,
   
  
     };
       this._ClientServiceService.createUser(obj).subscribe((redirectUri)=>{
         console.log(redirectUri);
         this._route.navigate(['/ClientList']);
       },(error)=>{
         console.log(error);
       });
    }else{

      this.id = this.route.snapshot.params.id;
      console.log(this.id);
console.log(this.redirectUri)
      const obj: any={
    id:this.redirectUri[0].id,
        redirectUri: this.redirectUri[0].redirectUri,
     clientID : this.id,
   
  
     };

   console.log(obj)
     console.log("yyyyyyyyyyyyyyyyyyy")
       this._ClientServiceService.updateUris(obj).subscribe((redirectUri)=>{
         console.log(redirectUri);
         this._route.navigate(['/ClientList']);
       },(error)=>{
         console.log(error);
       });
    }
  }


}
