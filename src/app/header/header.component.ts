import { Component } from '@angular/core';
import { AuthenticationService } from '../auth_module/auth/authentication.service';
import { Router, RouterLink  } from '@angular/router';


@Component({
selector: 'header',
templateUrl: '/app/header/header.component.html'
})

export class HeaderComponent{

 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

logout() {
        this.authenticationService.logout();
        // this.router.navigate(['login']); // r
    }
}