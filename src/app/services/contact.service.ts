import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  desc: Contacto = {};
  carga = true;

  constructor( private http: HttpClient ) {
    this.cargarContact();
  }

  private cargarContact() {
    this.http.get('https://portafolio-html-59583.firebaseio.com/contact.json')
    .subscribe( (resp: Contacto) => {
     this.carga = true;
     this.desc = resp;
   });
  }
}
