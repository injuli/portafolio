import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portafolio } from '../interfaces/portafolio.interface';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  desc: Portafolio = {};
  proyectos: Portafolio[] = [];

  constructor(private http: HttpClient) {

    this.cargarProyecto();
   }



     cargarProyecto() {
      this.http.get('https://portafolio-html-59583.firebaseio.com/infportfolio.json')
      .subscribe( (resp: Portafolio[]) => {
        this.proyectos = resp;

     });
    }

   }




