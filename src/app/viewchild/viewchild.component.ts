import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  message: String = "Initial string message";
  
  changeText() : void {
    this.message = "String updated by ViewChild";
  }
}
