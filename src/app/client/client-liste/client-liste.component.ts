import { Component, OnInit,Input } from '@angular/core';
import{Router}  from '@angular/router';
import{ClientServiceService} from '../../services/client-service.service'
import{Client} from '../../client';

@Component({
  selector: 'app-client-liste',
  templateUrl: './client-liste.component.html',
  styleUrls: ['./client-liste.component.css']
})
export class ClientListeComponent implements OnInit {
  events = []
  private clients:Client[];
  @Input() ville: string="jkjkkj";
  constructor(private _ClientServiceService:ClientServiceService,private _route:Router) { }

  ngOnInit() {
  
    console.log(this._ClientServiceService.getClientsListe())
    console.log(this._ClientServiceService.getClientsListe().subscribe())
    this._ClientServiceService.getClientsListe()
    
      .subscribe(
        
        res => this.events = res,
        err => console.log(err))
      }
      ListData(user){
        this._route.navigate(['/ClientData', user.id])  
      }
      ProfilUser(user){

        this._route.navigate(['/ClientDetails', user.id])
      }
      deleteUser(user){
        this._ClientServiceService.deleteUser(user.id).subscribe((data)=>{
          this._route.navigate(['/ClientList'])
              .then(() => {
                window.location.reload();
              });
            this.clients.splice(this.clients.indexOf(user),1);
        },(error)=>{
          console.log(error);
        });
      }
      


      ListData1(user){  
        this._ClientServiceService.setter(user);
        this._route.navigate(['/ClientForm']);
   
   
      }   


}
