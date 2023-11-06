import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent {

  constructor(private authenticator:AuthenticationService){}

  clickLogin() {
    console.log("wutwut");
    let result=this.authenticator.login({"userName":this.userName,"password":this.password});

    console.log(result);
    

}

  userName:string="";
  password:string="";

}
