import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-skills',
  templateUrl: './search-skills.component.html',
  styleUrls: ['./search-skills.component.css']
})
export class SearchSkillsComponent implements OnInit {

  private skill: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  searchSkill(){

    if(this.skill != undefined || this.skill != "" ){
      console.log("Searching for skill.." + this.skill + "!");
      this.router.navigate([ '../skills-catalog', this.skill], { relativeTo: this.route });
    }
  }

}
