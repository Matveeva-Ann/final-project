import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  willCall = false;
  menu = false;
  weWillCall(){
    this.willCall = true;
  }
  closeWindow(event:void){
    this.willCall = false;
  }




}
