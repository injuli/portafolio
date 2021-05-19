import { Component, OnInit, Inject } from '@angular/core';
import { PortafolioService } from '../../services/portafolio.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Portafolio } from '../../interfaces/portafolio.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  datos: string;
  primero: any;
  segundo: any;
  tercero: any;

  propiedades: any = {
    primero: true,
    segundo: true,
    tercero: true

  };

  constructor(public portafolioService: PortafolioService,
              public dialog: MatDialog,
              private router: ActivatedRoute) {
   this.portafolioService.cargarProyecto('Todo');
   this.router.params.subscribe(params => {
     console.log('ruta padre');
     console.log(params);
   });
   }

  buscar(termino: string){
    if(termino === 'Todo'){
      this.propiedades.primero = !this.propiedades.primero
      this.propiedades.primero = false;
      this.propiedades.segundo = true;
      this.propiedades.tercero = true;

    }
    if(termino === 'Angular' ){
      this.propiedades.segundo = !this.propiedades.segundo
      this.propiedades.primero = true;
      this.propiedades.segundo = false;
      this.propiedades.tercero = true;

    } if(termino === 'Ionic' ) {
      this.propiedades.tercero = !this.propiedades.tercero;
      this.propiedades.primero = true;
      this.propiedades.segundo = true;
      this.propiedades.tercero = false;
    }

   this.portafolioService.cargarProyecto(termino);
  }

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