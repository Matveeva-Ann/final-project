import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  willCall = false;
  menu = false;
  weWillCall(){
    this.willCall = true;
  }
  closeWindow(event:void){
    this.willCall = false;
  }


}
