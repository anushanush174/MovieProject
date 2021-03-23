import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface User {
    id?: number | string;
    login: string;
    password: any;
    email: any;
    user_type?: string;
  }

@Injectable()
export class AuthService {
    private API_URL = environment.API_URL + 'users';
    public authPerson: any;
    constructor( private http: HttpClient) {}

    // http://localhost:3000/admin?login=test&password=12345678
    // http://localhost:3000/admin?email=
    getAuthData(login, password): any{
        return this.http.get<void>(this.API_URL + '?login=' + login + '&password=' + password );
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
