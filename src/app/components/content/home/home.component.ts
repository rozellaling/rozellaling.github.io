import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeGalleryImages: {
    imageUrl: string;
    backgroundPosition?: string;
  }[] =
    [

      {
        imageUrl: 'assets/images/metalart/product7.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product13.jpg',
        backgroundPosition: "0 -120px"
      },
      {
        imageUrl: 'assets/images/metalart/product8.jpg',
        // backgroundPosition: "0 -5px"
      },

      {
        imageUrl: 'assets/images/3d/3Dmodelling8.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling6.jpg'
      },

      {
        imageUrl: 'assets/images/3d/3Dmodelling11.jpg'
      },

      {
        imageUrl: 'assets/images/accessories/accessories13.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories15.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories14.jpg'
      },

      // {
      //   imageUrl: 'assets/images/metalart/Corner-Light-(2).2.jpg'
      // }
    ];

  constructor() { }

  ngOnInit() {
  }

}
