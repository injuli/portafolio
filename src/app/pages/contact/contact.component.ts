import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';
import { Contacto } from '../../interfaces/contacto.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name;
   correo;
   subject;
   msj;
   

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

  constructor(public contactService: ContactService, public _MessageService: MensajeService) { }

  contactForm() {

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

  
  ngOnInit() {
  }

 

}
