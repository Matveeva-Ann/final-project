import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-will-call',
  templateUrl: './will-call.component.html',
  styleUrls: ['./will-call.component.scss']
})
export class WillCallComponent {
  @Input() willCall!:boolean;
  @Output() close = new EventEmitter<void>();
  phoneMask = ['+', '3', '8', ' ', '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  closeWindow(){
    this.close.emit();
  }
  


 

}
