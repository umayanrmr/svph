import { Component, OnInit,OnDestroy,Inject } from '@angular/core';
import { IFeaturable } from 'app/core/contracts/ifeaturable';
import { SurveyService } from 'app/survey/survey.service';
import { OptionsService } from 'app/survey/question/options/options.service';
import { ISurveyDTO } from 'app/survey/isurvey';
import { IChild }  from 'app/core/contracts/ichild';
import { Survey } from 'app/survey/survey.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { QuestionService } from './../question/question.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  survey: Survey;
  private _survey :  BehaviorSubject<Survey>;
  constructor(
              @Inject(SurveyService) private _surveyService: IHttpService, 
              @Inject(OptionsService) private _optionsService: IHttpService,
              @Inject(QuestionService) private _questionService: IChild,
              private _route: ActivatedRoute,
              private _fb: FormBuilder) { }
  private _surveyIdSubscription: ISubscription;

  

  ngOnInit() {
    this._surveyIdSubscription = this._route.params
                                    .subscribe(
                                      params => {
                                        this.setSurvey(<number> params['id']);
                                        // this.loadOptions(<number> params['id']);
                                      },
                                      err => {},
                                      () => this._surveyIdSubscription.unsubscribe()
                                    );
    // this.surveyForm = this._fb.group({

    // })


    let surveyIdSubscription = this._survey.subscribe(
      data => console.log(data)
    )
  }




  setSurvey(id: number){
   let subscription : ISubscription = this._surveyService.getById(id).subscribe(
      res => {
        this.survey = new Survey(this._surveyService,
                                      this._optionsService,
                                      this._questionService,
                                      res['survey']);
        this.survey.setQuestions();
      },
      err => {},
      () => subscription.unsubscribe()
    );
  }


  // loadOptions(id: number){
  //   let subscription : ISubscription = this._optionsService.list(id)
  //                                       .subscribe(
  //                                         res => this.options = <IOptionDTO[]> res['option'],
  //                                         err => {},
  //                                         () => subscription.unsubscribe()
  //                                       );
  // }

  onSubmit(value: any){
    console.log(value);
  }
  


  vote(form: any){
    console.log(form);
  }
}