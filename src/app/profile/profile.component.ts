import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import{Router}  from '@angular/router';
import{User} from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  events = []
  data =[]
  user:any;
  private users:User[];
  public path :string="file:///C:/Users/kouki/Desktop/jjj/IdentityServer4.EntityFramework-57b73e081ab87df02e95a323630ad00169aa0f5c/src/Host/"
  cheminImage:any = "../images.jpg";

  constructor(private _eventService: EventService,private _router:Router) { }
  public createImgPath = (serverPath: string) => {
    console.log("dddddddddddddddd")
    console.log(serverPath);
    return `https://localhost:5000/${serverPath}`;
    
  }  
  ngOnInit() {


if ( (this._eventService.getUserProfile())!=null)
{



    this._eventService.getUserProfile()
    
    
      .subscribe((events)=>{
        console.log(events)
        if
(events.phoneNumber[0]=='R'){
        const str = events.phoneNumber;


       var x =str.substr(17);
       var y="../../assets/img/"+x
       console.log(y)

console.log(events)
        const obj: any={
          UserName:events.userName ,
          Email:events.email,
          FullName:events.fullName ,
          file:y
         
      
    
       };





        this.data = obj;
            
        
        console.log(this.data);

   

        

      } });}


      
 else
 {

  

     this.data = this.user;
         
     
     console.log(this.data);

    }


    }
     
 
      

}
