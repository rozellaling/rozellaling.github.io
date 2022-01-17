import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeGalleryImages: {
    imageUrl: string;
  }[] =
    [
      {
        imageUrl: 'assets/images/accessories/accessories1.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories2.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories3.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product1.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product2.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product3.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling1.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling2.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling3.jpg'
      },
      // {
      //   imageUrl: 'assets/images/metalart/Corner-Light-(2).2.jpg'
      // }
    ];

  constructor() { }

  ngOnInit() {
  }

}
