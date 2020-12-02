import { Component, OnInit ,Input} from '@angular/core';
import { ApiResourceService } from '../api-resource.service';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-api-resource',
  templateUrl: './api-resource.component.html',
  styleUrls: ['./api-resource.component.css']
})
export class ApiResourceComponent implements OnInit {
  events = [] 
   @Input() ville: string="jkjkkj";
   role:any;

  constructor( private _apiService : ApiResourceService,private _route :Router) { }

  ngOnInit() {

   
      this._apiService.ListApi().subscribe(
        res => {
          console.log(res);
          this.events=res;
         
          // this.window.location.reload();
        },
      
        err => console.log(err)
      ) 
      
    


  
  }
  
  show: boolean = true;

  AddApiScopes(user){
    console.log(user)
    this._route.navigate(['/APiScopes', user.name])  
  }






  
  processForm(){
   
       this._apiService.addressourece(this.role).subscribe((user)=>{
         console.log(user);
         this._route.navigate(['/ApiResource']);
       },(error)=>{
         console.log(error);
       });
    }
  

  

}
