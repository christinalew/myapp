import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  lists = ['Homework','Groccery List','Chores'];
  removeList(i) {
    console.log('List removed')
    this.lists.splice(i,1);
  }
}
