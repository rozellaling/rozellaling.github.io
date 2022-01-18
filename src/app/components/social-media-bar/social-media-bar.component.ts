import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebookF;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
