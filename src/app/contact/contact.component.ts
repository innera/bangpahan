import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 14.4762302;
  lng: number = 100.5341148;
  

  constructor() { }

  ngOnInit() {
  }

}
