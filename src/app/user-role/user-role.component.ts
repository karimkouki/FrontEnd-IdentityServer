import { Component, OnInit } from '@angular/core';
import {UserRoleService} from '../user-role.service';
import{Role} from '../role';
import{Router}  from '@angular/router';
import{User} from '../user';



@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  events = []
  private users:User[];
  private roles:Role[];
  constructor(private _UserRoleService:UserRoleService,private _router:Router) { }

  ngOnInit() {


    this._UserRoleService.getUserRole().subscribe((users)=>{
      console.log(users);

      
      this.users=users;
    },(error)=>{
      console.log(error);
    })



    console.log(this._UserRoleService.getUserRole().subscribe())
    this._UserRoleService.getUserRole() 
    
      .subscribe(
  
        res => this.events = res
        
         ,
        
        err => console.log(err)
        
      )
     
  
 
  }
  

  updateUser(user){  
    this._UserRoleService.setter(user);
    this._router.navigate(['/UserRoleFrom', user.user.id] );


  }

}
