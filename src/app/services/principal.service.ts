import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Principal } from '../interfaces/principal.interface';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  info: Principal = {};
  carga = false;


  constructor( private http: HttpClient) {
    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: Principal) => {
      this.carga = true;
      this.info = resp;
    });
  }
}
