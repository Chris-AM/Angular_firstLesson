import { Component, OnInit } from '@angular/core';
import { Messages } from '../../shared/messages';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name: string;
  lastName: string;
  year: number;
  private messages = new Messages();

  constructor() {
    this.year = new Date().getFullYear();
    this.name = this.messages.name;
    this.lastName = this.messages.lastName;
   }

  ngOnInit(): void {
  }

}
