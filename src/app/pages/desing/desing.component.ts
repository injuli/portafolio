import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-desing',
  templateUrl: './desing.component.html',
  styleUrls: ['./desing.component.css']
})
export class DesingComponent implements OnInit {

  ruta;
  ruta1;
  sliptBy = '/';
  sliptext = [];
  blanco = false;
  azul = false;


  constructor( private router: Router, private activate: ActivatedRoute) {
  //  this.ruta1 = this.router.events.subscribe((val: NavigationEvent) => {
  //   if (val instanceof NavigationStart) {
  //     this.sliptext = val.url.split(this.sliptBy);
  //     this.ruta = this.sliptext[1];
  //     console.log(this.ruta);
  //   }
  //   });

    this.router.events.subscribe(val =>  {
      this.sliptext = val['url'].split(this.sliptBy);
      this.ruta = this.sliptext[1];
      console.log(this.ruta);
      if (this.ruta === 'home'){
        console.log('cambiooo...');

      }
    });

    console.log(this.ruta);
  }

  ngOnInit() {
    console.log(this.ruta);
  }

}
