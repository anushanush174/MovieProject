import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthService {
    private isAuth = false;

    login(): void {
        this.isAuth = true;
    }

    logout(): void {
        this.isAuth = false;
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise(res => {
            res(this.isAuth);
        });
    }

}
