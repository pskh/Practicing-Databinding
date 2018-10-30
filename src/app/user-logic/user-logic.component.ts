import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logic',
  templateUrl: './user-logic.component.html',
  styleUrls: ['./user-logic.component.css']
})
export class UserLogicComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  userName = "";

  doSomething() {
    this.userName = "";
  }


}
