import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import{Router}  from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})


export class UpdateUserComponent implements OnInit {
  public response: {dbPath: ''};

  constructor(private _eventService: EventService,private _router:Router) { }

  private user:any;

  ngOnInit() {


    this.user=this._eventService.getter();
    console.log(this.user)













































    

  }


  
   processForm(){
  
       this._eventService.updateUser(this.user).subscribe((user)=>{
         console.log(user);
         this._router.navigate(['/events']);
       },(error)=>{
         console.log(error);
         this._router.navigate(['/events']);

       });
    
  }




}
