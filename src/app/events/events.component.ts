import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import{Router}  from '@angular/router';

import{User} from '../user';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = []
  data :any


  name:string;
  students : any[];
  student1 : any;

  public obj:any;

  
  private users:User[];


 
  constructor(private _eventService: EventService,private _router:Router) { }

  getKeys(studentMap){


    
    return Array.from(studentMap.values());

}

  ngOnInit() {


   

    this._eventService.getEvents() 
    
    .subscribe((events)=>{
      console.log(events)
    

      var studentMap = new Map();
  
 











      
for (let i = 0; i < events.length; i++) {


  const str = events[i].phoneNumber;
  var x =str.substr(17);
  var y="../../assets/img/"+x

console.log(events[i])


var students = [
  { 
    id:events[i].id,
    UserName:events[i].userName ,
    Email:events[i].email,
    FullName:events[i].fullName ,
    file:y 
  }
];

  studentMap.set (events[i].userName,students);







 



  




 

}




console.log(studentMap);








this.data = Array.from(studentMap.values());


console.log(this.data)


 for (var item of this.data){
   
  console.log(item[0].Email)
  }















      
    
    
      
    
    
    
    
    
      
    
    
    
    
    }


    


      
        
      )

      
      
      
  
  }



 


  deleteUser(user){
    console.log(user)
    this._eventService.deleteUser(user.id).subscribe((data)=>{
      this._router.navigate(['/events'])
          .then(() => {
            window.location.reload();
          });
        this.users.splice(this.users.indexOf(user),1);
    },(error)=>{
      console.log(error);
    });
  }


  updateUser(user){  
    console.log(user);
    this._eventService.setter(user);
    console.log("hhhhh");
    this._router.navigate(['/UpdateUser']);
  }


  ProfilUser(user){  
    console.log(user);
    this._eventService.setter(user);
    console.log("hhhhh");
    this._router.navigate(['/UpdateUser']);
  }


  


 NewUser(){  
    let user=new User();
    console.log(user);
    this._eventService.setter(user);
    this._router.navigate(['/register ']);

  }

}
