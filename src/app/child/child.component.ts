import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message2:string='';
  @Output() increment2=new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increaseNumber(){
    this.increment2.emit(1);
  }

}
