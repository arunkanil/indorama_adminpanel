import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    console.log('curentuser', this.currentUserSubject);
    return this.currentUserSubject.value;
  }

  login(data) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/local/`, data)
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          console.log(user);
          if (user.jwt && (user.user.UserType == 'Admin' || user.user.UserType == 'Marketing')) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', user.jwt);
            localStorage.setItem('username', user.user.username);
            localStorage.setItem('uid', user.user.id);
            localStorage.setItem('user_type', user.user.UserType);
            localStorage.setItem('email', user.user.email);
            localStorage.setItem('name', user.user.Name);
            localStorage.setItem('phone_number', user.user.ContactNumber);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          } else {
            this.toastr.error('You\'re not authorized');
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
