import { Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';
import { CreateAccountComponent } from './create-account/create-account.component';

export const AuthRoutes: Routes = [
    
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
    { path: 'sign-up', component: CreateAccountComponent },
    { path: 'forgot', component: ForgotPasswordComponent }
];