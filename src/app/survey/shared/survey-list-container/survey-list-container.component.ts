import { Component, OnInit, Input } from '@angular/core';
import { ISurveyModel } from 'app/survey/isurvey.model';

@Component({
  selector: 'survey-list-container',
  templateUrl: './survey-list-container.component.html',
  styleUrls: ['./survey-list-container.component.css']
})
export class SurveyListContainerComponent implements OnInit {
  @Input() surveys: ISurveyModel[];

  constructor() {

   }

  ngOnInit() {

  }

}
