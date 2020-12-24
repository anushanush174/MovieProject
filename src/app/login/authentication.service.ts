import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticcationService {
    private API_URL = environment.API_ADMIN_URL;
    constructor( private http: HttpClient) {}

    getAuthdata(param): any{
        return this.http.get<void>(this.API_URL, param);
    }
}
