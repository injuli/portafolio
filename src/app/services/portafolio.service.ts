import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portafolio, InfoPortafolio } from '../interfaces/portafolio.interface';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  proyectos: any[] = [];
  desc: any = {};

  constructor(private http: HttpClient) {
    this.infoProyecto();
    this.cargarProyecto();
   }

   infoProyecto() {
    this.http.get('https://portafolio-html-59583.firebaseio.com/portfolio.json')
    .subscribe ((inf: InfoPortafolio) => {
      this.desc  = inf;
      console.log(inf);
    });
   }


     cargarProyecto() {
      this.http.get('https://portafolio-html-59583.firebaseio.com/infportfolio.json')
      .subscribe( (resp: any[]) => {
        this.proyectos = resp;

     });
    }

   }




