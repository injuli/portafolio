
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private _http: HttpClient) { }

  sendMessage(body){
    console.log('ingreso al sendmessage mensajeservice');
    console.log('mensae service', body);
    return this._http.post('http://localhost:5000/contact', body);
    
  }  
}
