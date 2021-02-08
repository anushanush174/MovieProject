import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Admin {
    id: number | string;
    login?: string;
    password?: any;
    email?: any;
  }

@Injectable()
export class AuthenticationService {
    private API_URL = environment.API_URL + 'admin';
    public authDataSubj =  new Subject<any>();
    constructor( private http: HttpClient) {
    }

    // http://localhost:3000/admin?login=test&password=12345678
    getAuthData(login, password): any{
        return this.http.get<void>(this.API_URL + '?login=' + login + '&password=' + password );
    }

    getEmail(email): any{
        return this.http.get<void>(this.API_URL + '?email=' + email);
    }

    changePassword(id: number | string, password: any): any {
        return this.http.patch<Admin>(this.API_URL + `/${id}`, password);
    }
}
