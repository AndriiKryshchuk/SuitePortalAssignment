import { HttpClient } from "@angular/common/http";
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
        return this.httpClient.post(`${this.baseUrl}/login`, credentials).pipe(
            tap((response: any) => {
                if (response && response.token) {
                    localStorage.setItem(this.TOKEN_KEY, response.token);
                    this.emitLoggedInEvent();
                }
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
            return localStorage.getItem(this.TOKEN_KEY);
        }
        return null;
    }

    isAuthenticatedUser(): boolean {
        return !!this.getToken();
    }
}