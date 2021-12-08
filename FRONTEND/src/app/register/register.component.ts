import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  adress: string = "";
  zipCode: number = 0;
  city: string = "";
  phoneNumber: number = 0
  email: string = "";
  gender: string = "";
  password: string = "";
  passwordConfirmation: string = "";
  login: string = "";

  showData: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.showData = true;
  }

}
