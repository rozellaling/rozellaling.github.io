import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: {
    imageUrl: string;
  }[] =
    [
      {
        imageUrl: 'assets/images/Accessories/Accessories.0.jpg'
      },
      {
        imageUrl: 'assets/images/Accessories/Accessories.1.jpg'
      },
      {
        imageUrl: 'assets/images/Accessories/Accessories.2.jpg'
      },
      {
        imageUrl: 'assets/images/Metal-Art/Minitable.1.jpg'
      },
      {
        imageUrl: 'assets/images/Metal-Art/Minitable.2.jpg'
      },
      {
        imageUrl: 'assets/images/Metal-Art/Minitable.3.jpg'
      },
      {
        imageUrl: 'assets/images/Metal-Art/Corner-Light (1).0.jpg'
      },
      {
        imageUrl: 'assets/images/Metal-Art/Corner-Light (1).1.jpg'
      },
      {
        imageUrl: 'assets/images/Metal-Art/Corner-Light (1).2.jpg'
      },
      // {
      //   imageUrl: 'assets/images/Metal-Art/Corner-Light-(2).2.jpg'
      // }
    ];

  constructor() { }

  ngOnInit() {
  }

}
