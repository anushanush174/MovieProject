import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticcationService } from './authentication.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})

export class LoginPageComponent implements OnInit {
    public loginForGroup: FormGroup;
    constructor(private authenticcationService: AuthenticcationService) { }
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

