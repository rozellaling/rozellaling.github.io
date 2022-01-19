import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { ImageDialogComponent } from '../../image-dialog/image-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input('galleryImages') galleryImages: {
    imageUrl: string;
    backgroundPosition?: string;
  }[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  // TODO: answer to UGP

  openDetailDialog(imageUrl: string) {
    let dialogRef = this.dialog.open(ImageDialogComponent, {
      height: '70vh',
      width: '70%',
      data: { imageUrl }
    });
  }


}
