import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './services/principal.service';
import { AcercaService } from './services/acerca.service';
import { ResumeService } from './services/resume.service';
import { Container, Main } from 'tsparticles';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    id = 'tsparticles';
  constructor( public principalService: PrincipalService, public acercaService: AcercaService, public resumeService: ResumeService ) {

  }
  particlesOptions = {
    background: {
        color: {
            value: 'none'
        }
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onClick: {
                enable: true,
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
            value: 80
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

}
