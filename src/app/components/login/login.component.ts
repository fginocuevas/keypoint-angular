import { UserProfileModel } from './../../models/user/user-profile.model';
import { LoginUserModel } from './../../models/user/login-user.model';
import { LoginService  } from './../../services/login/login.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  @Output() onLoginSuccess= new EventEmitter<boolean>();
  private username: string;
  private password: string;
  private loginUserModel: LoginUserModel;
  private sub: any;


  constructor(private loginSvc: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.loginUserModel= new LoginUserModel;
    this.loginUserModel.username= this.username;
    this.loginUserModel.password= this.password;

    this.sub= this.loginSvc.login(this.loginUserModel).subscribe(
      (data: UserProfileModel) => {
        // Set currentUser: UserProfileModel into localStorage
        localStorage.setItem("currentUser", JSON.stringify(data));
        console.log("Login Success! ");
        //console.log(data);
        this.router.navigateByUrl('/dashboard/home');
        this.onLoginSuccess.emit(true);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
