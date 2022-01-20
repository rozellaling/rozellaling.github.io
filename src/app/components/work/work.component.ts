import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  accessoriesGalleryImages: {
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
        imageUrl: 'assets/images/accessories/accessories4.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories5.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories6.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories7.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories8.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories9.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories10.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories11.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories12.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories13.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories14.jpg'
      },
      {
        imageUrl: 'assets/images/accessories/accessories15.jpg'
      }
    ];
  threeDGalleryImages: {
    imageUrl: string;
  }[] = [
      {
        imageUrl: 'assets/images/3d/3Dmodelling1.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling2.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling3.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling4.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling6.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling8.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling9.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling10.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling11.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling12.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling14.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling16.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling17.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling18.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling19.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling20.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling21.jpg'
      },
      {
        imageUrl: 'assets/images/3d/3Dmodelling22.jpg'
      },
    ];

  metalArtGalleryImages: {
    imageUrl: string;
  }[] = [
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
        imageUrl: 'assets/images/metalart/product4.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product5.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product6.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product7.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product8.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product9.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product10.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product11.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product13.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product14.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product15.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product16.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product17.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product18.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product19.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product20.jpg'
      },
      {
        imageUrl: 'assets/images/metalart/product21.jpg'
      },
    ];


  constructor() { }

  ngOnInit() {
  }

}
