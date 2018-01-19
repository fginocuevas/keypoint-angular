import { UserProfileModel } from './../../models/user/user-profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private currentUser: UserProfileModel;

  constructor() { }

  ngOnInit() {
    this.currentUser= JSON.parse(localStorage.getItem("currentUser"));
  }

}
