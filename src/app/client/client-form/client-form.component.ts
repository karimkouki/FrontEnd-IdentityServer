import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ClientServiceService} from '../../services/client-service.service'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private _ClientServiceService:ClientServiceService,private _route:Router) { }

  

  ngOnInit() {
  }

}
