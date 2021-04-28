import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {
  @Input() newList;
  @Output() addToLists = new EventEmitter;
  name:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }

  addList() {

  }
}
