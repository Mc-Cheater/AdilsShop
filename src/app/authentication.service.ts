import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usersDB:Array<User>=[
  {userName:"adil",password:"123"},
  {userName:"ahmed",password:"1234"},
  {userName:"hicham",password:"123456"},
];

  isConnected:boolean=false;

  current:User|undefined;
  constructor() { 


  }

  login(user:User):boolean{
    let result=this.usersDB.find((u)=>{return u.userName===user.userName && u.password===user.password;})
    if(result===undefined){
      console.log(user);
      console.log(result);
      this.isConnected=false;
      return false;
    }
    else{
      this.isConnected=true;
      this.current=result;
      return true;
    }
  }

}
