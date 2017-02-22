"use strict";
var router_1 = require('@angular/router');
var main_content_component_1 = require('./main-content/main-content.component');
var home_component_1 = require('./home/home.component');
var login_component_1 = require('./auth_module/login/login.component');
var auth_guard_1 = require('./auth_module/auth/auth.guard');
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard], children: [
            { path: 'products', component: main_content_component_1.MainContentComponent, outlet: 'mainContent' }
        ] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: 'home' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map