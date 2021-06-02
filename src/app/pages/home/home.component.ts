import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../services/principal.service';
import { Container, Main } from 'tsparticles';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
    ruta: string;
    first: any;
    second: any;

  id = 'tsparticles';
  constructor( public principalService: PrincipalService,
               private router: ActivatedRoute ) {
                   this.router.url.subscribe(ruta => {
                       console.log(ruta[0].path);
                       this.ruta = ruta[0].path;
                   });
                   this.lineaColor();
                }

  particlesOptions = {
    background: {
        color: {
            value: 'none'
        }
    },
    fpsLimit: 20,
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onClick: {
                enable: false,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 3
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    position: {
        value: 'fixed'
    },
    particles: {
        color: {
            value: '#2F3E87'
        },
        links: {
            color: '#030c3a',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
      triangles: {
        enable: true,
        color: '#7EAFDE',
        opacity: 0.1
      }
        },
        collisions: {
            enable: true
        },
        move: {
            enable: true,
            speed: 5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 55
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'triangle',
            stroke: {
              width: 0,
              color: '#000000'}
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
};

particlesLoaded(container: Container): void {
    console.log(container);
}

particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
}

lineaColor(){
    
}

}
