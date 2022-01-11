import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = {
    prenom: 'Romain',
    email: 'romain.bohdanowicz@formation.tech',
    isActive: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  create(event: Event) {
    event.preventDefault();
    console.log(this.user);
  }

  updateEmail(event: Event) {
    const target = event.target as HTMLInputElement;
    this.user.email = target.value;
  }
}
