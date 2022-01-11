import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  items = ['Toto', 'Titi', 'Tata'];
  selected = 'Toto';

  menuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
