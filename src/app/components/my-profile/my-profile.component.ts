import { MySkillModel } from './../../models/skill/my-skill.model';
import { UserProfileModel } from './../../models/user/user-profile.model';
import { Component, OnInit } from '@angular/core';
import { SkillModel } from '../../models/skill/skill.model';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private currentUserFuck: UserProfileModel;
  private mySkills: MySkillModel[];

  constructor() { }

  ngOnInit() {

    console.log("ngOnInit - IN")

    let currentUser= this.currentUserFuck;
    let mySkills= this.mySkills;

    currentUser= JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    mySkills= JSON.parse(localStorage.getItem("mySkills"));

  }

}
