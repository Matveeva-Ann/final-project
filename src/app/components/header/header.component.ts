import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public willCall = false;
  // private menu = false;
  closeFormCall(event:any):void{
    this.willCall=false;
  }

  

}
