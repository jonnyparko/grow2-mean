(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t){function r(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=154},155:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(217))},156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(222))},157:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(224))},158:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(226)),n(r(227)),n(r(228)),n(r(229))},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(160);var n=r(214),o=r(215);n.platformBrowserDynamic().bootstrapModule(o.AppModule)},160:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(161),r(213)},215:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=r(59),s=r(129),a=r(97),c=r(216),u=r(158),l=r(230),f=r(155),p=r(156),d=r(157),v=r(237),h=function(){function e(){}return e=n([o.NgModule({imports:[i.BrowserModule,s.ReactiveFormsModule,a.HttpClientModule,c.appRoutingModule],declarations:[l.AppComponent,f.HomeComponent,p.LoginComponent,d.RegisterComponent,v.AlertComponent],providers:[{provide:a.HTTP_INTERCEPTORS,useClass:u.JwtInterceptor,multi:!0},{provide:a.HTTP_INTERCEPTORS,useClass:u.ErrorInterceptor,multi:!0}],bootstrap:[l.AppComponent]})],e)}();t.AppModule=h},216:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(76),o=r(155),i=r(156),s=r(157),a=r(158),c=[{path:"",component:o.HomeComponent,canActivate:[a.AuthGuard]},{path:"login",component:i.LoginComponent},{path:"register",component:s.RegisterComponent},{path:"**",redirectTo:""}];t.appRoutingModule=n.RouterModule.forRoot(c)},217:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(41),a=r(56),c=function(){function e(e,t){this.authenticationService=e,this.userService=t,this.users=[],this.currentUser=this.authenticationService.currentUserValue}return e.prototype.ngOnInit=function(){this.loadAllUsers()},e.prototype.deleteUser=function(e){var t=this;this.userService.delete(e).pipe(s.first()).subscribe((function(){return t.loadAllUsers()}))},e.prototype.loadAllUsers=function(){var e=this;this.userService.getAll().pipe(s.first()).subscribe((function(t){return e.users=t}))},e=n([i.Component({template:r(221)}),o("design:paramtypes",[a.AuthenticationService,a.UserService])],e)}();t.HomeComponent=c},218:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(57),c=function(){function e(e){var t=this;this.router=e,this.subject=new a.Subject,this.keepAfterRouteChange=!1,this.router.events.subscribe((function(e){e instanceof s.NavigationStart&&(t.keepAfterRouteChange?t.keepAfterRouteChange=!1:t.clear())}))}return e.prototype.getAlert=function(){return this.subject.asObservable()},e.prototype.success=function(e,t){void 0===t&&(t=!1),this.keepAfterRouteChange=t,this.subject.next({type:"success",text:e})},e.prototype.error=function(e,t){void 0===t&&(t=!1),this.keepAfterRouteChange=t,this.subject.next({type:"error",text:e})},e.prototype.clear=function(){this.subject.next()},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.Router])],e)}();t.AlertService=c},219:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(97),a=r(57),c=r(41),u=function(){function e(e){this.http=e,this.currentUserSubject=new a.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}return Object.defineProperty(e.prototype,"currentUserValue",{get:function(){return this.currentUserSubject.value},enumerable:!0,configurable:!0}),e.prototype.login=function(e,t){var r=this;return this.http.post("/api/users/authenticate",{username:e,password:t}).pipe(c.map((function(e){return localStorage.setItem("currentUser",JSON.stringify(e)),r.currentUserSubject.next(e),e})))},e.prototype.logout=function(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.HttpClient])],e)}();t.AuthenticationService=u},220:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(97),a=function(){function e(e){this.http=e}return e.prototype.getAll=function(){return this.http.get("/api/users")},e.prototype.register=function(e){return this.http.post("/api/users/register",e)},e.prototype.delete=function(e){return this.http.delete("/api/users/"+e)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.HttpClient])],e)}();t.UserService=a},221:function(e,t){e.exports='<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You\'re logged in with Angular 8!!</p>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor="let user of users">\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\n        - <a (click)="deleteUser(user.id)" class="text-danger">Delete</a>\n    </li>\n</ul>'},222:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(129),c=r(41),u=r(56),l=function(){function e(e,t,r,n,o){this.formBuilder=e,this.route=t,this.router=r,this.authenticationService=n,this.alertService=o,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({username:["",a.Validators.required],password:["",a.Validators.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"},Object.defineProperty(e.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.alertService.clear(),this.loginForm.invalid||(this.loading=!0,this.authenticationService.login(this.f.username.value,this.f.password.value).pipe(c.first()).subscribe((function(t){e.router.navigate([e.returnUrl])}),(function(t){e.alertService.error(t),e.loading=!1})))},e=n([i.Component({template:r(223)}),o("design:paramtypes",[a.FormBuilder,s.ActivatedRoute,s.Router,u.AuthenticationService,u.AlertService])],e)}();t.LoginComponent=l},223:function(e,t){e.exports='<h2>Login</h2>\n<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" formControlName="username" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.username.errors }" />\n        <div *ngIf="submitted && f.username.errors" class="invalid-feedback">\n            <div *ngIf="f.username.errors.required">Username is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">\n            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\n            Login\n        </button>\n        <a routerLink="/register" class="btn btn-link">Register</a>\n    </div>\n</form>'},224:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(129),c=r(41),u=r(56),l=function(){function e(e,t,r,n,o){this.formBuilder=e,this.router=t,this.authenticationService=r,this.userService=n,this.alertService=o,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({firstName:["",a.Validators.required],lastName:["",a.Validators.required],username:["",a.Validators.required],password:["",[a.Validators.required,a.Validators.minLength(6)]]})},Object.defineProperty(e.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.alertService.clear(),this.registerForm.invalid||(this.loading=!0,this.userService.register(this.registerForm.value).pipe(c.first()).subscribe((function(t){e.alertService.success("Registration successful",!0),e.router.navigate(["/login"])}),(function(t){e.alertService.error(t),e.loading=!1})))},e=n([i.Component({template:r(225)}),o("design:paramtypes",[a.FormBuilder,s.Router,u.AuthenticationService,u.UserService,u.AlertService])],e)}();t.RegisterComponent=l},225:function(e,t){e.exports='<h2>Register</h2>\n<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="firstName">First Name</label>\n        <input type="text" formControlName="firstName" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.firstName.errors }" />\n        <div *ngIf="submitted && f.firstName.errors" class="invalid-feedback">\n            <div *ngIf="f.firstName.errors.required">First Name is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="lastName">Last Name</label>\n        <input type="text" formControlName="lastName" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.lastName.errors }" />\n        <div *ngIf="submitted && f.lastName.errors" class="invalid-feedback">\n            <div *ngIf="f.lastName.errors.required">Last Name is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" formControlName="username" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.username.errors }" />\n        <div *ngIf="submitted && f.username.errors" class="invalid-feedback">\n            <div *ngIf="f.username.errors.required">Username is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n            <div *ngIf="f.password.errors.minlength">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">\n            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\n            Register\n        </button>\n        <a routerLink="/login" class="btn btn-link">Cancel</a>\n    </div>\n</form>\n'},226:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(56),c=function(){function e(e,t){this.router=e,this.authenticationService=t}return e.prototype.canActivate=function(e,t){return!!this.authenticationService.currentUserValue||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.Router,a.AuthenticationService])],e)}();t.AuthGuard=c},227:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(57),a=r(41),c=r(56),u=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var r=this;return t.handle(e).pipe(a.catchError((function(e){401===e.status&&(r.authenticationService.logout(),location.reload(!0));var t=e.error.message||e.statusText;return s.throwError(t)})))},e=n([i.Injectable(),o("design:paramtypes",[c.AuthenticationService])],e)}();t.ErrorInterceptor=u},228:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(56),a=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var r=this.authenticationService.currentUserValue;return r&&r.token&&(e=e.clone({setHeaders:{Authorization:"Bearer "+r.token}})),t.handle(e)},e=n([i.Injectable(),o("design:paramtypes",[s.AuthenticationService])],e)}();t.JwtInterceptor=a},229:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=r(97),s=r(57),a=r(41),c=JSON.parse(localStorage.getItem("users"))||[],u=function(){function e(){}return e.prototype.intercept=function(e,t){var r=e.url,n=e.method,o=e.headers,u=e.body;return s.of(null).pipe(a.mergeMap((function(){switch(!0){case r.endsWith("/users/authenticate")&&"POST"===n:return o=u.username,i=u.password,(s=c.find((function(e){return e.username===o&&e.password===i})))?l({id:s.id,username:s.username,firstName:s.firstName,lastName:s.lastName,token:"fake-jwt-token"}):f("Username or password is incorrect");case r.endsWith("/users/register")&&"POST"===n:return function(){var e=u;if(c.find((function(t){return t.username===e.username})))return f('Username "'+e.username+'" is already taken');return e.id=c.length?Math.max.apply(Math,c.map((function(e){return e.id})))+1:1,c.push(e),localStorage.setItem("users",JSON.stringify(c)),l()}();case r.endsWith("/users")&&"GET"===n:return d()?l(c):p();case r.match(/\/users\/\d+$/)&&"DELETE"===n:return d()?(c=c.filter((function(e){return e.id!==(t=r.split("/"),parseInt(t[t.length-1]));var t})),localStorage.setItem("users",JSON.stringify(c)),l()):p();default:return t.handle(e)}var o,i,s}))).pipe(a.materialize()).pipe(a.delay(500)).pipe(a.dematerialize());function l(e){return s.of(new i.HttpResponse({status:200,body:e}))}function f(e){return s.throwError({error:{message:e}})}function p(){return s.throwError({status:401,error:{message:"Unauthorised"}})}function d(){return"Bearer fake-jwt-token"===o.get("Authorization")}},e=n([o.Injectable()],e)}();t.FakeBackendInterceptor=u,t.fakeBackendProvider={provide:i.HTTP_INTERCEPTORS,useClass:u,multi:!0}},230:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(56);r(231);var c=function(){function e(e,t){var r=this;this.router=e,this.authenticationService=t,this.authenticationService.currentUser.subscribe((function(e){return r.currentUser=e}))}return e.prototype.logout=function(){this.authenticationService.logout(),this.router.navigate(["/login"])},e=n([i.Component({selector:"app",template:r(236)}),o("design:paramtypes",[s.Router,a.AuthenticationService])],e)}();t.AppComponent=c},231:function(e,t,r){var n=r(232);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(234)(n,o);n.locals&&(e.exports=n.locals)},232:function(e,t,r){(e.exports=r(233)(!1)).push([e.i,"a {\n  cursor: pointer;\n}\n",""])},236:function(e,t){e.exports='\x3c!-- nav --\x3e\n<nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="currentUser">\n    <div class="navbar-nav">\n        <a class="nav-item nav-link" routerLink="/">Home</a>\n        <a class="nav-item nav-link" (click)="logout()">Logout</a>\n    </div>\n</nav>\n\n\x3c!-- main app container --\x3e\n<div class="jumbotron">\n    <div class="container">\n        <div class="row">\n            <div class="col-sm-6 offset-sm-3">\n                <alert></alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n\x3c!-- credits --\x3e\n<div class="text-center">\n    <p>\n        <a href="https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial" target="_top">Angular 8 - User Registration and Login Example & Tutorial</a>\n    </p>\n    <p>\n        <a href="https://jasonwatmore.com" target="_top">JasonWatmore.com</a>\n    </p>\n</div>'},237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(238))},238:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(56),a=function(){function e(e){this.alertService=e}return e.prototype.ngOnInit=function(){var e=this;this.subscription=this.alertService.getAlert().subscribe((function(t){switch(t&&t.type){case"success":t.cssClass="alert alert-success";break;case"error":t.cssClass="alert alert-danger"}e.message=t}))},e.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},e=n([i.Component({selector:"alert",template:r(239)}),o("design:paramtypes",[s.AlertService])],e)}();t.AlertComponent=a},239:function(e,t){e.exports='<div *ngIf="message" [ngClass]="message.cssClass">{{message.text}}</div>'},56:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(218)),n(r(219)),n(r(220))}},[[159,1,2]]]);