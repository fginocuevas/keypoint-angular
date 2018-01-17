import { SkillModel } from './../../../models/skill/skill.model';
import { SkillService } from './../../../services/skill/skill.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [SkillService]
})
export class CatalogComponent implements OnInit {

  @Input() skill:string;
  private sub: any;
  private skillsResults: SkillModel[];

  constructor(private skillSvc: SkillService) { }

  ngOnInit() {
    let skill= this.skill;
    if(skill != undefined && skill != null && skill != ""){
      this.searchSkill();
    }
  }

  searchSkill(){
    console.log("CatalogComponent - searchSkill() - IN");

    let skill= this.skill;

    if(skill != undefined && skill != null && skill != ""){
      console.log("CatalogComponent - searchSkill() - skill not empty!");
      this.sub= this.skillSvc.searchSkill(skill).subscribe(
        (data: SkillModel[]) => {
          console.log("Data was returned");
          this.skillsResults= data;
        }
      );
    }
    
    console.log("CatalogComponent - searchSkill() - OUT");
  }

  ngOnDestrop() {
    this.sub.unsubscribe;
  }

}
