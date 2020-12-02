import { Component, OnInit } from '@angular/core';
import{RoleService} from '../services/role.service';
import{Router}  from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../role';

@Component({

  


  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  
})
export class RoleComponent implements OnInit {
private role:Role;

id: string;
events = []
redirectUri: any;
registerUserData = {}
  constructor(private route: ActivatedRoute,private _route :Router,private _RoleService: RoleService) { }

  ngOnInit() {





    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this._RoleService.getUser(this.id).subscribe((data)=>{

      this.redirectUri = data[0];
          
      


      console.log(data[0]);
    },(error)=>{
      console.log(error);
    });
  




    


    this.role=this._RoleService.getter();
    this.role=this._RoleService.getter();
    this._RoleService.getRolesListe().subscribe((events)=>{
      console.log(events);
      this.events=events;
    },(error)=>{
      console.log(error);
    }) 
  
   /// this.role=this._RoleService.getter();
  }


    
  ListData(role){

    this._RoleService.setter(role);
    console.log(role)
    this.role =this._RoleService.getter();
      console.log(this.role)

    this.show = false;
    this._route.navigate(['/Role', role.id]) .then(() => {
            window.location.reload();
          }); 
  }

    deleteRole(role){
      this._RoleService.deleteUser(role.id).subscribe((data)=>{
          this._route.navigate(['/Role']).then(() => {
            window.location.reload();
          });
     
        },(error)=>{
        console.log(error);
      });
    }

    show: boolean = true;


    registerRole() {
      if(this.role.name!=undefined){
    console.log(this.role)
      this._RoleService.registerRole(this.role) 
      .subscribe(
        res => {
          console.log(res);
          this._route.navigate(['/Role'])
          .then(() => {
            window.location.reload();
          });
          // this.window.location.reload();
        },
      
        err => console.log(err)
      )  }
      else{

        this.role =this._RoleService.getter();
      console.log(this.role)
        
        this._RoleService.updateRole(this.role).subscribe((role)=>{
          console.log(role);
     
          this._route.navigate(['/Role']) .then(() => {
            window.location.reload();
          });
        },(error)=>{
          console.log(error);
        });
     }
    

      //this._route.navigate(['/'])
           
    
  
    }







    processForm(){
      if(this.role.id==undefined){
         this._RoleService.registerRole(this.role).subscribe((role)=>{
           console.log(role);

           
           this._route.navigate(['/Role']) .then(() => {
            window.location.reload();
          });
         },(error)=>{
           console.log(error);
         });
      }else{
         this._RoleService.updateRole(this.role).subscribe((role)=>{
           console.log(role);
           this._route.navigate(['/Role']) .then(() => {
            window.location.reload();
          });
         },(error)=>{
           console.log(error);
         });
      }
    }




    








    updateUser(role){  
      this._RoleService.setter(role);
      console.log("up")
      this.show = false;
      console.log(role)
    /*  this._route.navigate(['/Role']).then(() => {
        window.location.reload();
        
      });
      */
 
 
    }





}
