import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';
import { Contacto } from '../../interfaces/contacto.interface';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  name;
   correo;
   subject;
   msj;

   message: string = '📡 Enviando...';
   actionButtonLabel: string = 'X';
   action: boolean = true;
   setAutoHide: boolean = true;
   autoHide: number = 2000;
   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   
   addExtraClass: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('emailFormControl') ? 'Not a valid email' : '';
  }

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(public contactService: ContactService, public _MessageService: MensajeService, public snackBar: MatSnackBar) { }

  contactForm() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);



    const usuario = {
      name: this.name,
      correo: this.correo,
      subject: this.subject,
      msj: this.msj
    };
    
    console.log(this.msj);

    this._MessageService.sendMessage(usuario).subscribe(()=> {
     

    });



    //this._MessageService.sendMessage(form).subscribe(() => {
      console.log('enviado');
      console.log(usuario);
    //});
  }

  open() {
   
  }
  
  ngOnInit() {
  }

 

}
