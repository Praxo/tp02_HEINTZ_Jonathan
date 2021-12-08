import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() adress: string = "";
  @Input() zipCode: number = 0;
  @Input() city: string = "";
  @Input() phoneNumber: number = 0
  @Input() email: string = "";
  @Input() gender: string = "";
  @Input() password: string = "";
  @Input() passwordConfirmation: string = "";
  @Input() login: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
