import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SkillService {

  private skillSearchApiUrl: string= "https://keypoint-api.herokuapp.com/api/skill-search/";
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

}
