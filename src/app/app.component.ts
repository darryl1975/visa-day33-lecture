import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'visa-day33-lecture';

  greeting: String = "Message from parent";

  public Item: any = "";

  public isOnline!: boolean;

  @ViewChild(ViewchildComponent)
  childComponent!: ViewchildComponent;
  
  constructor() {
    this.isOnline = false;
  }

  ngOnInit(): void {
    this.updateOnlineStatus();

    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this))
  }

  changeViewchildText() : void {
    this.childComponent.changeText();
  }

  AddItem(itemName: any): void {
    this.Item = itemName;
  }

  updateOnlineStatus() : void {
    this.isOnline = window.navigator.onLine;
    console.info("Connected to internet.");
    console.info(`isOnline flag: [${this.isOnline}]`);
  }
}
