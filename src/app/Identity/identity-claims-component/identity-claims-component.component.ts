import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';

import{IdentityServiceService} from '../../services/identity-service.service'

@Component({
  selector: 'app-identity-claims-component',
  templateUrl: './identity-claims-component.component.html',
  styleUrls: ['./identity-claims-component.component.css']
})
export class IdentityClaimsComponentComponent implements OnInit {
  events = []
  constructor(private _IdentityServiceService: IdentityServiceService,private _router:Router) { }
 
  ngOnInit() { console.log(this._IdentityServiceService.getIdentityClaims().subscribe())
    this._IdentityServiceService.getIdentityClaims() 
    
      .subscribe(
      
        res => this.events = res ,
        
        err => console.log(err)
      )
      
  
  }

}
