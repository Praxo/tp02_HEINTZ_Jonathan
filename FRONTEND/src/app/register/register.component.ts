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
  phoneNumber: string = "";
  email: string = "";
  gender: boolean = false;
  password: string = "";
  passwordConfirmation: string = "";
  login: string = "";

  showData: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.firstName === "") {
      alert("Le champ nom ne doit pas être vide");
      return;
    }
    if (this.lastName === "") {
      alert("Le champ prénom ne doit pas être vide");
      return;
    }
    if (this.email === "" || !this.email.includes("@") || !this.email.includes(".")) {
      alert("Le champ email ne doit pas être vide");
      return;
    }
    if (this.login === "") {
      alert("Le champ login ne doit pas être vide");
      return;
    }
    if (this.password !== this.passwordConfirmation) {
      alert("Les mots de passe sont différents");
      return
    }
    if (this.password === "") {
      alert("Le mot de passe ne doit pas être vide");
      return;
    }
    if (this.passwordConfirmation === "") {
      alert("Le mot de passe de confirmation ne doit pas être vide");
      return;
    }
    if (this.zipCode === 0) {
      alert("Le code postale ne peut pas être à 0");
      return;
    }
    if (this.adress === "") {
      alert("Le champ adresse ne doit pas être vide");
      return;
    }
    if (this.phoneNumber === "") {
      alert("Le champ téléphone ne doit pas être vide");
      return;
    }


    this.showData = true;
  }

}
