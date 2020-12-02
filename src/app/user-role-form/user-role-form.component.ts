import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserRoleService} from '../user-role.service';
import{RoleService} from '../services/role.service';
import{UserRole}  from '../user-role';

import{Router}  from '@angular/router';


@Component({
  selector: 'app-user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.css']
})
export class UserRoleFormComponent implements OnInit {
  @Output() alerteCanicule = new EventEmitter<any>();
  onTemperatureRises() {
    this.alerteCanicule.emit();  // Déclenche l'output
    console.log("ouiii")
  }
 

  constructor(private route: ActivatedRoute,private _RoleService: RoleService,private _UserRoleService:UserRoleService,private _router:Router) { }
  events = []
  id: string;
  redirectUri: any;
  private user:any[];
  private roles:any[];
  private userrole:UserRole[];

  ngOnInit() {

    this._RoleService.getRolesListe().subscribe((events)=>{
      console.log(events);
      this.events=events;
    },(error)=>{
      console.log(error);
    }) 

    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this._UserRoleService.getUser(this.id).subscribe((data)=>{

      this.redirectUri = data[0];
          console.log(this.redirectUri);
      console.log(data[0]);
    },(error)=>{
      console.log(error);
    });
  








  }


  processForm(){
  console.log(this.redirectUri.user.roleName)
    console.log(this.redirectUri)
    const category: UserRole = {
      RoleName: this.redirectUri.user.roleName,

      role: this.redirectUri.roles[0],
      user:this.redirectUri.user,
    };
console.log(category)
       this._UserRoleService.updateUser(category).subscribe((category)=>{
         console.log(category);
         
         this._router.navigate(['/UserRole']) .then(() => {
          window.location.reload();
        });
       },(error)=>{
        this._router.navigate(['/UserRole']) .then(() => {
          window.location.reload();
        });
         console.log(error);
       });
    
  }


  updateUser(userrole){  
    this._RoleService.updateRole(userrole);
    console.log("up")
    console.log(userrole)
    console.log("up")
    this._router.navigate(['/UserRole']) .then(() => {
      window.location.reload();
    });
    console.log(userrole)
  /*  this._route.navigate(['/Role']).then(() => {
      window.location.reload();
      
    });
    */


  }
 

}
