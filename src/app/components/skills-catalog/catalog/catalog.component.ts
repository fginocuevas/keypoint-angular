import { LevelModel } from './../../../models/skill/level.model';
import { MySkillModel } from './../../../models/skill/my-skill.model';
import { SaveSkillResponseModel } from './../../../models/skill/save-skill-response.model';
import { SkillModel } from './../../../models/skill/skill.model';
import { SkillService } from './../../../services/skill/skill.service';
import { Component, OnInit, OnDestroy, Input, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SaveSkillModel } from '../../../models/skill/save-skill.model';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [SkillService]
})
export class CatalogComponent implements OnInit {

  @Input() skill:string;
  @ViewChild('lgModal') private modal: ModalDirective;
  private sub: any;
  private subSaveSkill: any;
  private skillsResults: SkillModel[];
  private modalRef: BsModalRef;
  private selectedSkill: SkillModel;
  private isSelectedSkill: boolean;
  private skillRatingLevel: number; 
  private readonly DEFAULT_RATING_LEVEL= 3;
  private levelSelected: LevelModel;
  private mySkills: MySkillModel[];

  private levels= [
    {id: 1, title: "Interested", description: "I have no idea but I want to learn it"},
    {id: 2, title: "Familiar", description: "Small amount of knowledge"},
    {id: 3, title: "Used", description: "Used it on a project"},
    {id: 4, title: "Master", description: "Used it for more than 3 years. I can teach you this."},
    {id: 5, title: "Guru", description: "I can do this in my sleep"},
  ];

  constructor(private skillSvc: SkillService, private modalService: BsModalService) { }

  ngOnInit() {

    let skill= this.skill;
    if(skill != undefined && skill != null && skill != ""){
      this.searchSkill();
    }

    //Set default skill level in modal
    if(this.skillRatingLevel == undefined && this.skillRatingLevel == null){
      this.skillRatingLevel= this.DEFAULT_RATING_LEVEL;
      this.levelSelected= this.levels[this.DEFAULT_RATING_LEVEL - 1];

      console.log("skill level initialize - skillRatingLevel = " + this.skillRatingLevel);
      console.log("skill level initialize - levelSelected = " + this.levelSelected.title);
    }

    if(this.mySkills == undefined && this.mySkills == null){
      this.mySkills= JSON.parse(localStorage.getItem("mySkills"));
    }

  }

  saveSelectedSkill(){

    console.log("CatalogComponent - saveSelectedSkill() - IN");

    var username= localStorage.getItem('currentUserName'); 
    var selectedSkill= this.selectedSkill;
    var skillRatingLevel= this.skillRatingLevel;
    var levelSelected= this.levelSelected;
  
    var skillModel= this.createMySkillModel(selectedSkill, levelSelected, skillRatingLevel)
    var saveSkillModel= this.createSaveSelectedSkillModel(username, skillModel);

    if(saveSkillModel!= undefined && saveSkillModel!= null){
      this.subSaveSkill= this.skillSvc.saveSelectedSkill(saveSkillModel).subscribe(
        (data: SaveSkillResponseModel) => {
          //Set success or failed message!

          //Add to mySkills localStorage, simulate adding skills to employee
          var mySkills: MySkillModel[] = JSON.parse(localStorage.getItem("mySkills"));
          mySkills.push(skillModel);
          this.mySkills= mySkills;
          localStorage.setItem("mySkills", JSON.stringify(mySkills));
          this.modal.hide();
        }
      );
    }
    
    console.log("CatalogComponent - saveSelectedSkill() - OUT");
  }

  createMySkillModel(skillModel: SkillModel, levelModel: LevelModel, skillRatingLevel: number): MySkillModel{
    var mySkillModel: MySkillModel;

    if( skillModel != undefined && skillModel != null  
      && skillRatingLevel != undefined && skillRatingLevel != null ){
        mySkillModel= new MySkillModel();
        mySkillModel.skillModel= skillModel;
        mySkillModel.levelModel= levelModel;
        mySkillModel.skillProficiency= skillRatingLevel;
        console.log(mySkillModel);
      }

    return mySkillModel;
  }

  // Parse data into a SaveSkillModel
  createSaveSelectedSkillModel(username: string, mySkillModel: MySkillModel): SaveSkillModel{

    console.log("CatalogComponent - createSaveSelectedSkillModel() - IN");

    var saveSkillModel: SaveSkillModel;
    
    if(username != undefined && username != null && 
      mySkillModel != undefined && mySkillModel != null){
        saveSkillModel= new SaveSkillModel();
        saveSkillModel.mySkillModel= mySkillModel;
        console.log(saveSkillModel);
      }

      console.log("CatalogComponent - createSaveSelectedSkillModel() - OUT");
    
    return saveSkillModel;
  }

  openModal(template: TemplateRef<any>){
    this.modalRef= this.modalService.show(template);
  }

  setSelectedSkill(selectedSkill: SkillModel){
    this.isSelectedSkill= true;
    this.selectedSkill= selectedSkill;
  }

  searchSkill(){
    console.log("CatalogComponent - searchSkill() - IN");

    let skill= this.skill;

    if(skill != undefined && skill != null && skill != ""){
      console.log("CatalogComponent - searchSkill() - skill not empty!");
      this.sub= this.skillSvc.searchSkill(skill).subscribe(
        (data: SkillModel[]) => {
          console.log("Data was returned" + JSON.stringify(data));
          this.skillsResults= data;
        }
      );
    }
    
    console.log(this.skillsResults);
    console.log("CatalogComponent - searchSkill() - OUT");
  }

  setLevelDescription(selectNumber: number){
    console.log("setLevel: " + selectNumber);
    this.levelSelected= this.levels[selectNumber - 1];
    console.log("setLevel: " + this.levelSelected.title);
  }

  ngOnDestroy() {
    if(this.sub != undefined && this.sub != null){
      this.sub.unsubscribe();
    }
  }

}
