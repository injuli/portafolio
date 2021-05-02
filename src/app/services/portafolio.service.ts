import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portafolio, InfoPortafolio } from '../interfaces/portafolio.interface';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  proyectos: Portafolio[] = [];
  desc: InfoPortafolio = {};
  proyect: string;
  termino: string;
  constructor(private http: HttpClient) {
    this.infoProyecto();

   }

   infoProyecto() {
    this.http.get('https://portafolio-html-59583.firebaseio.com/portfolio.json')
    .subscribe ((inf: InfoPortafolio) => this.desc  = inf);
   }

     cargarProyecto(termino: string) {
       this.termino = termino;
       this.proyect = 'Todo';
      this.http.get('https://portafolio-html-59583.firebaseio.com/infportfolio.json')
      .subscribe( (resp: Portafolio[]) => {
        for (let i = 0; i < resp.length; i++) {
          let proyecto = resp[i].id;
        if (termino === this.proyect) {
          return this.proyectos = resp;
        }
        if (termino === proyecto) {
         return this.proyectos = resp;
        } else {
          return this.proyectos = null;
        }
        }
      });
    }


   }




