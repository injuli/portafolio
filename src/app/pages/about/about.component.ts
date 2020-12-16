import { Component, OnInit } from '@angular/core';
import { AcercaService } from '../../services/acerca.service';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public acercaService: AcercaService, public curriculumService: CurriculumService ) { }

  ngOnInit() {
  }

  downCurriculum(){
    console.log('link');
  }

}
