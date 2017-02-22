// login.component.js
import { Component } from '@angular/core';
import { Router, RouterLink, CanActivate  } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
    selector: 'login',
    templateUrl: '/app/auth_module/login/login.component.html'
})

export class LoginComponent {
    model: any = {};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .then(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            })
            .catch(e => {
                this.loading = false;
            });
    }
}
