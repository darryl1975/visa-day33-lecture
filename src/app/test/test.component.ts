import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData')
  public greeting!: String;

  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    
  }

  sendItem(itemName: any): void {
    this.eventEmitter.emit(itemName);
  }
}
