import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';
import{IdentityServiceService} from '../../services/identity-service.service'
import{IdentityClaims} from '../../identity-claims'
@Component({
  selector: 'app-identity-claims-from-component',
  templateUrl: './identity-claims-from-component.component.html',
  styleUrls: ['./identity-claims-from-component.component.css']
})
export class IdentityClaimsFromComponentComponent implements OnInit {
  events = []
  private users:any[];
 
  constructor(private _IdentityServiceService: IdentityServiceService,private _router:Router) { }

  ngOnInit() {
  }


updateUser(IdentityClaims){  
  console.log(IdentityClaims);
  this._IdentityServiceService.setter(IdentityClaims);
  console.log("hhhhh");
  this._router.navigate(['/IdentityClaims']);

}

}