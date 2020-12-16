import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  carga = true;
  constructor(private http: HttpClient) {
    this.cargarPdf();
   }

   private cargarPdf(){
     this.http.get('gs://portafolio-html-59583.appspot.com/Documento/cv IngridRuiz (1).pdf')
     .subscribe(resp => {
       this.carga =true;
        console.log('resp', resp);
     }); 

   }
}
