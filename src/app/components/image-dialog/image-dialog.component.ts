import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons/faWindowClose';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent {
  faWindowClose = faWindowClose;

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
