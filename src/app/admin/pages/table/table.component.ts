import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Output() editPress = new EventEmitter<any>(); 
  @Output() deletePress = new EventEmitter<any>(); 

  @Input() titleKeysArr: any[] = [];
  @Input() dataArr: any[] = [];
  
  edit(elem: any):void{
     this.editPress.emit(elem);
  }

  delete(elem: any): void {
    this.deletePress.emit(elem);
  }
}
