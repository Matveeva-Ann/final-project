import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent {

  public activeTab = '';

  ngOnInit(): void {

  }
  click(clickElem:string):void{
    this.activeTab=clickElem;

  }

}
