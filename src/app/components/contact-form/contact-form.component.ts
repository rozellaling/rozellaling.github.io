import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public subject: string = "";
  public body: string = "";

  constructor() { }

  ngOnInit() {
  }

  sendEmail() {
    console.log('test');
  }

}
