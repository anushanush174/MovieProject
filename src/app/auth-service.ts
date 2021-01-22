import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthService {
    private isAuth = false;
    loginSubj = new Subject<boolean>();


    login(): void {
        this.isAuth = true;
    }

    logout(): void {
        this.isAuth = false;
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise(res => {
            res(this.isAuth);
            this.loginSubj.next(!!this.isAuth);
        });
    }

}
