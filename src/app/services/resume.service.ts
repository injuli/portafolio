import { Injectable } from '@angular/core';

import { Curriculo } from '../interfaces/curriculo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  desc: Curriculo = {};
  carga = true;
  constructor( private http: HttpClient) {
    this.cargarResume();
   }

   private cargarResume() {
    this.http.get('https://portafolio-html-59583.firebaseio.com/resume.json')
    .subscribe( (resp: Curriculo) => {
     this.carga = true;
     this.desc = resp;
   });
   }
}
