import { Component } from '@angular/core';
import { PrincipalService } from './services/principal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public principalService: PrincipalService ) {

  }
}
