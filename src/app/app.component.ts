import { Component } from '@angular/core';
import { PrincipalService } from './services/principal.service';
import { AcercaService } from './services/acerca.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public principalService: PrincipalService, public acercaService: AcercaService ) {

  }
}
