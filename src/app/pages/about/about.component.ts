import { Component, OnInit } from '@angular/core';
import { AcercaService } from '../../services/acerca.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public acercaService: AcercaService) { }

  ngOnInit() {
  }

}
