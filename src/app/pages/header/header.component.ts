import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

}
