import { Component, OnInit, Inject } from '@angular/core';
import { PortafolioService } from '../../services/portafolio.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Portafolio } from '../../interfaces/portafolio.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  datos: string;

  constructor(public portafolioService: PortafolioService, public dialog: MatDialog) { }
  openDialog(data: any) {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fue cerrado');
      this.datos = result;
    });
  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html'
})

// tslint:disable-next-line:component-class-suffix
export class DialogElementsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject (MAT_DIALOG_DATA) public data: any) {
    console.log(data);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}