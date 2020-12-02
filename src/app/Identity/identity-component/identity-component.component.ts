import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';

import{IdentityServiceService} from '../../services/identity-service.service'






@Component({
  selector: 'app-identity-component',
  templateUrl: './identity-component.component.html',
  styleUrls: ['./identity-component.component.css']
})
export class IdentityComponentComponent implements OnInit {
  events = []
  constructor(private _IdentityServiceService: IdentityServiceService,private _router:Router) { }
  ngOnInit() {
    console.log(this._IdentityServiceService.getEvents().subscribe())
    this._IdentityServiceService.getEvents() 
    
      .subscribe(
      
        res => this.events = res ,
        
        err => console.log(err)
      )
      
  
  }

}
