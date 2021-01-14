import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticcationService {
    private API_URL = environment.API_URL + 'admin?';
    constructor( private http: HttpClient) {
    }

    // http://localhost:3000/admin?login=test&password=12345678
    getAuthData(login, password): any{
        return this.http.get<void>(this.API_URL + 'login=' + login + '&password=' + password );
    }
}
