import { Component } from '@angular/core';

@Component({
  selector: 'app-sushi-navigation',
  templateUrl: './sushi-navigation.component.html',
  styleUrls: ['./sushi-navigation.component.scss']
})
export class SushiNavigationComponent {

  public activeTab = 'all';

  clickElem(event:string):void{
    this.activeTab = event;
  }
}
