import { ISurveyModel } from './isurvey.model';
export class Survey implements ISurveyModel{
    id : number;
    question_type_id: number;
    question_caption: string;
    updated_at : string;
    respondents: number;
}