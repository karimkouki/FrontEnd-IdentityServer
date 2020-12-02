import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';

import { Router } from '@angular/router'
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: User;

  registerUserData = {}
  public response: { dbPath: '' };

  constructor(private _auth: AuthService,
    private _eventService: EventService,
    private _router: Router) { }


  ngOnInit() {
    this.user = this._eventService.getter();

  }

  public uploadFinished = (event) => {

    console.log(event)
    console.log(this.response = event);
  }


  public createImgPath = (serverPath: string) => {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

    console.log(serverPath);
    return `https://localhost:5000/${serverPath}`;

  }

  registerUser() {
    if (this.user.UserName != undefined) {




      const obj: any = {
        UserName: this.user.UserName,
        Email: this.user.Email,
        Password: this.user.Password,
        FullName: this.user.FullName,
        file: this.response.dbPath



      };

      console.log(obj)

      console.log(event)
      this._auth.registerUser(obj)


        .subscribe(
          res => {



            console.log("ouuuuuuuuuuuuuuuuuuuuu")
            console.log(res);
            this._router.navigate(['/login']);


          },

          err => console.log(err)
        )

      this._router.navigate(['/login']);

    }
    else {
      console.log("ffffffffffff")
      this._eventService.updateUser(this.user).subscribe(

        (user) => {
          console.log(user);

        }, (error) => {
          console.log(error);
        });
    }
  }
  login() {
    this._router.navigate(['login'])
  }




}
