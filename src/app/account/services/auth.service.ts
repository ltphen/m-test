// import {Injectable} from "@angular/core";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs/Observable";
// import {tap} from "rxjs/operators";
// import {Router} from "@angular/router";
// import * as jwt from "jsonwebtoken";

// export interface UserInfo {
//     id: number;
//     username: string;
//     email: string;
//     image: string;
// }

// export interface CSRFToken {
//     token: string;
// }
// @Injectable()
// export class AuthService {
//     constructor(private router: Router, private httpc: HttpClient) {
//     }

//     handleAuthentication(token): void {
//         try {
//             this.setSession(jwt.decode(token), token);
//         } catch (err) {
//             console.log('error..' + err);
//         }
//     }

//     private setSession(authResult, accessToken): void {
//         const expiresAt = JSON.stringify(authResult.exp * 1000);
//         localStorage.setItem('access_token', accessToken);
//         localStorage.setItem('user_id', authResult.userId);
//         localStorage.setItem('username', authResult.username);
//         localStorage.setItem('roles', JSON.stringify(authResult.roles));
//         localStorage.setItem('email', authResult.email);
//         localStorage.setItem('expires_at', expiresAt);
//         localStorage.setItem('image', authResult.image);
//         localStorage.setItem('lock', 'false');
//     }

//     public getUserInfo(): UserInfo {
//         const id = parseInt(localStorage.getItem('user_id'), 10);
//         return {
//             id: id,
//             username: localStorage.getItem('username'),
//             email: localStorage.getItem('email'),
//             image: localStorage.getItem('image')
//         };
//     }

//     public logout(): void {
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('username');
//         localStorage.removeItem('expires_at');
//         localStorage.removeItem('user_id');
//         localStorage.removeItem('lock');
//         localStorage.removeItem('email');
//         localStorage.removeItem('roles');
//         localStorage.removeItem('image');
//         localStorage.removeItem('secret');
//         this.router.navigate(['/']);
//     }

//     public lockSession(): void {
//         localStorage.removeItem('expires_at');
//         localStorage.removeItem('user_id');
//         localStorage.removeItem('roles');
//         localStorage.setItem('lock', 'true');
//         this.router.navigate(['/favorites']);
//     }

//     public isAuthenticated() {
//         const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//         return new Date().getTime() < expiresAt;
//     }

//     /*getAuthHeader(): Observable<CSRFToken> {
//      return this.httpc.get<CSRFToken>('/login').retry(2);
//      }*/

//     authenticate(body): Observable<any> {
//         return this.httpc.post('/login', body)
//             .pipe(
//                 tap(_ => console.log(`login successful`)),
//                 // catchError(this.handleError(``))
//             );
//     }

//     reloggin() {
//         this.handleAuthentication(localStorage.getItem('access_token'));
//     }

//     private handleError(operation = 'operation') {
//         return (error: any): any => {
//             console.error(error); // log to console instead
//         };
//     }

//     changePassword(id: number, body) {
//         let url;
//         if (this.isRoleGestionnaire('ROLE_STAFF')) {
//             url = '/apm/user/change-password/staff/';
//             return this.httpc.post(url + id, body);
//         } else if (this.isRoleGestionnaire('ROLE_USERAVM')) {
//             url = '/apm/user/change-password/user/';
//             return this.httpc.post(url + id, body);
//         }
//     }

//     resetPassword(body) {
//         let url;
//         if (this.isRoleGestionnaire('ROLE_GESTIONNAIRE')) {
//             url = '/reset-password/staff/request';
//         } else {
//             url = '/reset-password/user/request';
//         }
//         return this.httpc.post(url, body);
//     }

//     createUser(body) {
//         let url;
//         if (this.isRoleGestionnaire('ROLE_GESTIONNAIRE')) {
//             url = '/staff/register';
//         } else {
//             url = '/user/register';
//         }
//         return this.httpc.post(url, body);
//     }

//     isRoleGestionnaire(role: string) {
//         const ROLES = JSON.parse(localStorage.getItem('roles')) || [];
//         return ROLES.indexOf(role) !== -1;
//     }
// }
