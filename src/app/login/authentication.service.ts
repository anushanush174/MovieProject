import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface User {
    id?: number | string;
    login: string;
    password: any;
    email: any;
  }

@Injectable()
export class AuthenticationService {
    private API_URL = environment.API_URL + 'admin';
    public authPerson: any;
    constructor( private http: HttpClient) {
    }

    // http://localhost:3000/admin?login=test&password=12345678
    // http://localhost:3000/admin?email=
    getAuthData(login, password): any{
        return this.http.get<void>(this.API_URL + '?login=' + login + '&password=' + password );
    }

    getUsersList(): any{
        return this.http.get<void>(this.API_URL);
    }

    getEmail(email): any{
        return this.http.get<void>(this.API_URL + '?email=' + email);
    }

    changePassword(id: number | string, password: any): any {
        return this.http.patch<User>(this.API_URL + `/${id}`, password);
    }

    createUser(user: User): any {
        return this.http.post(this.API_URL, user);
    }
}
