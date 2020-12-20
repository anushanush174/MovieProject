import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})

export class LoginPageComponent implements OnInit {
    public loginForGroup: FormGroup;
    constructor() { }
    ngOnInit(): void {
        this.loginForGroup = new FormGroup({
            login: new FormControl(''),
            password: new FormControl(''),
        });
     }

    onLogin(): void{
        console.log('logged in');

    }

}

