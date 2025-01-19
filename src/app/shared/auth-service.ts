import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthModel } from "./auth-model";

@Injectable({providedIn:"root"})
export class AuthService{

    private token: string;
    private authenticatedSub = new Subject<boolean>();
    private isAuthenticated = false;
    private logoutTimer: any;


    getIsAuthenticated(){
        return this.isAuthenticated;
    }
    getAuthenticatedSub(){
        return this.authenticatedSub.asObservable();
    }
    getToken(){
        return this.token;
    }
    
    constructor(private http: HttpClient, private router: Router){}
    
    signupUser(username: string, password: string){

        const authData: AuthModel = {username: username, password: password};
        
        this.http.post('http://localhost:3000/sign-up/', authData).subscribe(res => {
            this.router.navigate(["/"])
            console.log(res);
        })
    }

    loginUser(username: string, password: string){
        const authData: AuthModel = {username: username, password: password};

        this.http.post<{token: string,expiresIn: number}>('http://localhost:3000/login/', authData)
            .subscribe(res => {
                this.token = res.token;
                if(this.token){
                    this.authenticatedSub.next(true);
                    this.isAuthenticated = true;
                    this.router.navigate(['/'])
                    this.logoutTimer = setTimeout(() => {this.logout()}, res.expiresIn * 1000);

                }
            })
    }
    logout(){
        this.token = '';
        this.isAuthenticated = false;
        this.authenticatedSub.next(false);
        this.router.navigate(['/']);
        clearTimeout(this.logoutTimer);

      
    }
}