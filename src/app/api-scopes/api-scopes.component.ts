import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { ApiResourceService } from '../api-resource.service';
import{Router}  from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-api-scopes',
  templateUrl: './api-scopes.component.html',
  styleUrls: ['./api-scopes.component.css']
})
export class APiScopesComponent implements OnInit {
  @Output() alerteCanicule = new EventEmitter<any>();
  onTemperatureRises() {
    this.alerteCanicule.emit();  // Déclenche l'output
    console.log("ouiii")
  }
  constructor( private route: ActivatedRoute,private _apiService : ApiResourceService,private _route :Router) { }
  id: string;
  user: any;
  role: any;


  ngOnInit() {
   

    this.id = this.route.snapshot.params.id;
    console.log(this.id);

    this._apiService.ListAPiScopes(this.id).subscribe((data)=>{

      this.user = data;
      console.log(this.user)
          
      console.log(data);
    },(error)=>{
      console.log(error);
    });
    this.role=this._apiService.getter();



  }
  
  show: boolean = true;




  deleteRole(role){
    console.log(role)
    this._apiService.deleteUser(role.id).subscribe((data)=>{
        this._route.navigate(['/APiScopes/:id']).then(() => {
          window.location.reload();
        });
   
      },(error)=>{
      console.log(error);
    });
  }















  registerAPiScopes(){
    console.log(this.role);
    const category: any = {
      apiResourceID: this.user.apiResourceID,
      name:this.role.name,
      displayName:this.role.displayName,
      required:this.role.required,
      emphasize:this.role.emphasize,
      showInDiscoveryDocument:this.role.showInDiscoveryDocument

    };

    console.log(category);
    
this._apiService.addScoopes(category).subscribe((category)=>{
  console.log(category);
  this._route.navigate(['/ApiResource']) .then(() => {
    window.location.reload();
  });
 },(error)=>{
  this._route.navigate(['/ApiResource']) .then(() => {
    window.location.reload();
  });
   console.log(error);
 });
  }


   
}
