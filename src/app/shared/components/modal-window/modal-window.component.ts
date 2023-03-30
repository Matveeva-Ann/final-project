import { Component, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  // @Input() willCall!:boolean;
  @Output() close = new EventEmitter<void>();

 

  closeWindow(){
    this.close.emit();
  }
  stopPropagation(event: Event):void{
    event?.stopPropagation()
  }
}
