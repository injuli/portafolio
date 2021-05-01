import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Education, Experiencia, Resume } from '../interfaces/curriculo.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  education: Education[] = [];
  experiencia: Experiencia[] = [];
  desc: Resume = {};
  carga = true;
  constructor( private http: HttpClient) {
    this.infoEducation();
    this.infoExperience();
    this.infoTitle();

   }

   infoEducation() {
     this.http.get('https://portafolio-html-59583.firebaseio.com/education.json')
     .subscribe((dataEducation: Education[]) => this.education = dataEducation);

   }

   infoExperience() {
     this.http.get('https://portafolio-html-59583.firebaseio.com/experiencia.json')
     .subscribe((dataExperience: Experiencia[]) => this.experiencia = dataExperience);

   }

   infoTitle(){
     this.http.get('https://portafolio-html-59583.firebaseio.com/resume.json')
     .subscribe((dataTitle: Resume) => this.desc = dataTitle);
   }


}
