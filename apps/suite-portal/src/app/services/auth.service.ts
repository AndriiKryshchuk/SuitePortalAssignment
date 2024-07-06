import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


@Injectable({
    providedIn: "root",
})
export class AuthService {
    private baseUrl = "http://localhost:3333/api";
    private readonly TOKEN_KEY = "token";
    constructor(private httpClient: HttpClient) { }

    login(credentials: {email: string; password: string}): Observable<any> {
        let body = new URLSearchParams();
            body.set('email', credentials.email);
            body.set('password', credentials.password);
            console.log('before post: ', {body, credentials});
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
            
        return this.httpClient.post(`${this.baseUrl}/auth/signin`, body, {headers}).pipe(
            tap((response: any) => {
                // setTimeout(() => {
                //     const token = response?.access_token;
                //     if (!!token) {                        
                //         localStorage.setItem(this.TOKEN_KEY, token);
                //         this.emitLoggedInEvent();
                //     }
                // })
            })
        );
    }

    // for future actions support based on login behavior 
    loggedInEvent: EventEmitter<any> = new EventEmitter();
    emitLoggedInEvent() {
        this.loggedInEvent.emit();
    }

    getToken(): string | null {
        if (typeof window !== "undefined") {
            console.log('TOKEN: ', !!null, !!localStorage.getItem(this.TOKEN_KEY));
            
            return localStorage.getItem(this.TOKEN_KEY);
        }
        return null;
    }

    isAuthenticatedUser(): boolean {
        return !!this.getToken();
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.emitLoggedInEvent();
    }
}