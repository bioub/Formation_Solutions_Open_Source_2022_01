import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css'],
})
export class MultiStateButtonComponent implements OnInit {
  items = ['Toto', 'Titi', 'Tata'];
  index = 0;

  constructor() {}

  ngOnInit(): void {}

  nextItem() {
    this.index = (this.index + 1) % this.items.length;
  }
}
