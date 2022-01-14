import { Component, OnInit } from '@angular/core';
//TODO: remove other font awsome things i dont need.
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebookF;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }

}
