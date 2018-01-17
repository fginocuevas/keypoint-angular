import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-skills-catalog',
  templateUrl: './skills-catalog.component.html',
  styleUrls: ['./skills-catalog.component.css']
})
export class SkillsCatalogComponent implements OnInit {

  private skill: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub= this.route.params.subscribe(
      params => {
        this.skill = params['skill'];
        console.log("SEARCHED for skill.." + this.skill + "!");
      }
    );
  }

}
