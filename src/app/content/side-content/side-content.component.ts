import { Component } from '@angular/core';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})

export class SideContentComponent {
  public stateType=State;
  public currentState:State=State.SHOW_CART;



}


export enum State{
  SHOW_CART,SHOW_LOGIN_FORM,HIDDEN
  }