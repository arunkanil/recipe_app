import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { User } from "../../models/user";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    console.log("curentuser", this.currentUserSubject);
    return this.currentUserSubject.value;
  }

  login(data) {
    return this.http.post<any>(`${environment.apiUrl}admin/login/`, data).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        console.log(user);
        if (user.status == 200) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("token", user.data.token);
          localStorage.setItem("last_login", user.data.last_login);
          localStorage.setItem("id", user.data.id);
          localStorage.setItem("is_superuser", user.data.is_superuser);
          localStorage.setItem("email", user.data.email);
          localStorage.setItem('first_name', user.data.first_name);
          localStorage.setItem('last_name', user.data.last_name);
          localStorage.setItem('role', user.data.role);
          localStorage.setItem('is_staff', user.data.is_staff);

          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
  }
}
