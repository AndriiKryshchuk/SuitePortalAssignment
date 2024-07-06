import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'pm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    successMessage: string = "";
    errorMessage: string = "";

    userForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      }
    );
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    ngOnInit(): void {

    }

    login(): void {
      if (this.userForm.valid) {
        const credentials = this.userForm.value;
        console.log('credentials', credentials);
        
        this.authService.login(credentials).subscribe(
            (response: any) => {
                const token = response.access_token;
                localStorage.setItem("token", token);
                this.authService.emitLoggedInEvent();
                this.userForm.reset();
                this.successMessage = response.message;
                setTimeout(() => {
                  this.router.navigate(['/admin/maintenances']);
                },500);
            },
            (error: any) => {
                console.error("Error logging in:", error);
                this.errorMessage =
                    "Login unsuccessfull ! Please reload or try in incognito tab";
            }
        );
        this.errorMessage = "";
        this.successMessage = "";
      }
    }

    register(): void {
        // for future implementation
    }
}