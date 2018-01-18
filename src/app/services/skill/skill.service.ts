import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SkillModel } from '../../models/skill/skill.model';
import { SaveSkillModel } from '../../models/skill/save-skill.model';

@Injectable()
export class SkillService {

  private skillSearchApiUrl: string= "https://keypoint-api.herokuapp.com/api/skill-search/";
  private saveSelectedSkillUrl: string= "https://keypoint-api.herokuapp.com/api/resource-skill";
  private skillSearchUrl: string;

  constructor(private http: HttpClient) { }

  searchSkill(skill: string): Observable<any>{
    console.log("SkillService - searchSkill() - IN ");
    console.log("SkillService - searchSkill() - Searching for the skill " + skill);

    this.skillSearchUrl= this.skillSearchApiUrl + skill;

    console.log("SkillService - searchSkill() - URL " + this.skillSearchUrl);
    console.log("SkillService - searchSkill() - OUT ");
    return this.http.get(this.skillSearchUrl);
  }

  saveSelectedSkill(skill: SaveSkillModel): Observable<any>{
    console.log("SkillService - saveSelectedSkill() - IN ");
    console.log("SkillService - saveSelectedSkill() - OUT ");
    return this.http.post(this.saveSelectedSkillUrl, skill);
  }

}
