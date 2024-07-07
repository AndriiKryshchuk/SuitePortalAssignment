import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: "root",
})
export class AuthService {
    private baseUrl = `${environment.API_URL}/api`;
    private readonly TOKEN_KEY = "token";
    constructor(
        private httpClient: HttpClient
    ) { }

    login(credentials: {email: string; password: string}): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}/auth/signin`, credentials);
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
        return !!this.getToken(); //in new version check expiration of tocken
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.emitLoggedInEvent();
    }
}