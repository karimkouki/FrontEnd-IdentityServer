import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ClientServiceService} from '../../services/client-service.service';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  @Output() alerteCanicule = new EventEmitter<any>();
  onTemperatureRises() {
    this.alerteCanicule.emit();  // Déclenche l'output
    console.log("ouiii")
  }
  constructor(private route: ActivatedRoute,private _route :Router,
    private _ClientServiceService: ClientServiceService) { }
  id: number;
  redirectUri: any;
  ngOnInit() {


    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this._ClientServiceService.ClientProfil(this.id).subscribe((data)=>{

      this.redirectUri = data;
      console.log(this.redirectUri)    
      console.log(data[0]);
    },(error)=>{
      console.log(error);
    });
  }

}
