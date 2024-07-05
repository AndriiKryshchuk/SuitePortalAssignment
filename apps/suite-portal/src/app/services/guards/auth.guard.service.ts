import { Injectable } from "@angular/core"; 
import { 
    ActivatedRouteSnapshot, 
    CanActivate, 
    Router, 
    RouterStateSnapshot,
} from "@angular/router"; 
import { AuthService } from "../auth.service"; 
  
@Injectable() 
export class AuthGuardService implements CanActivate { 
    constructor( 
        private authService: AuthService, 
        private router: Router) { } 
    canActivate( 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Promise<boolean> { 
        var isAuthenticated = this.authService.isAuthenticatedUser(); 
        console.log('############## GUARD', isAuthenticated);
        
        if (!isAuthenticated) {
            this.router.navigate(['/admin']); 
        } 
        return isAuthenticated;
    } 
} 