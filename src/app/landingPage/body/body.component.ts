import { Component, OnInit } from '@angular/core';
import { Messages } from '../../shared/messages';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private messages = new Messages();
  uncleBen: string = ' ';
  benMenssage: string = ' ';
  spidy: string = this.messages.spidy;
  venom: string = this.messages.venom;
  octopus: string = this.messages.octopus;
  show = true;
  characters = [this.spidy, this.venom, this.octopus]
  
  constructor() {
    this.uncleBen = this.messages.uncleBen;
    this.benMenssage = this.messages.benMenssage; 
   }

  ngOnInit(): void {
  }

  
}
