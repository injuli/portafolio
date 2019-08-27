import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interfaces/acerca.interface';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {
  desc: Info = {};
  carga = true;

  constructor( private http: HttpClient) {
    this.cargarInfo();
   }

   private cargarInfo() {

       this.http.get('https://portafolio-html-59583.firebaseio.com/about.json')
       .subscribe( (resp: Info) => {
        this.carga = true;
        this.desc = resp;
      });
   }



}
