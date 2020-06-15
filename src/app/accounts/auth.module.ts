import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthRoutes } from './auth.routing';

@NgModule({
    declarations: [      
        ForgotPasswordComponent,
        SigninComponent,
        CreateAccountComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(AuthRoutes),
    ]
  })
  export class AuthModule { }