import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { UserProfileModel } from './../../models/user/user-profile.model';
import { LoginUserModel } from '../../models/user/login-user.model';

@Injectable()
export class LoginService {

  private loginUrl: string= '';
  private loginUrlMock: string= 'https://keypoint-api.herokuapp.com/api/authentication/login';

  constructor(private http: HttpClient) { }

  login(user: LoginUserModel): Observable<any> {
    return this.http.post(this.loginUrlMock, user);
  }

}
