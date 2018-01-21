import { MySkillModel } from './../../models/skill/my-skill.model';
import { UserProfileModel } from './../../models/user/user-profile.model';
import { Component, OnInit } from '@angular/core';
import { KeypointConstants } from '../shared/keypoint-constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private currentUser: UserProfileModel;
  private mySkills: MySkillModel[];
  private itemsPerPage: number= KeypointConstants.PAGINATE_ITEMS_PER_PAGE;
  private shouldMySkillsPaginate: boolean= false;

  constructor() { }

  ngOnInit() {
    this.currentUser= JSON.parse(localStorage.getItem("currentUser"));
    this.mySkills= JSON.parse(localStorage.getItem("mySkills"))
  }

  ngDoCheck() {

    if(this.mySkills.length > KeypointConstants.PAGINATE_ITEMS_PER_PAGE){
      this.shouldMySkillsPaginate= true;
    } else {
      this.shouldMySkillsPaginate= false;
    }
    
  }

}
