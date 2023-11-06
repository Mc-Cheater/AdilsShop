/*import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  template: `
  <form #name="ngForm" >
    <label for="userName" class="labels">Login :</label>
    <input type="text" id="userName" class="inputs invalid" >
    <div class="invalidMessage"> required</div>
    <label for="password" class="labels">Password :</label>
    <input type="password" id="password" class="inputs">
    <div class="invalidMessage"> required</div>
    
    <span id="btnContainer"><button type="submit"> Login</button></span>
    <p> Not registered yet? please <span><a href="#" style="display: inline;"> Subscribe </a></span> ! </p>
</form>



  `,
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

constructor(private authenticator:AuthenticationService){}

  clickLogin() {

    let result=this.authenticator.login({"userName":this.userName,"password":this.password});

    

}

  userName:string="";
  password:string="";


}
*/