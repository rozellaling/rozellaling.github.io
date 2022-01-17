import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input('galleryImages') galleryImages: {
    imageUrl: string;
  }[] = [];

  constructor() { }

  ngOnInit() {
  }

}
