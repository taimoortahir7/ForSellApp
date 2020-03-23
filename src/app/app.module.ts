import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DashboardSidebarComponent } from './dashboard/sidebar/dashboard-sidebar.component';
import { LandingPagesComponent } from './dashboard/landing-pages/landing-pages.component';
import { CreateLandingPagesComponent } from './dashboard/create-landing-pages/create-landing-pages.component';
import { SelectTemplateComponent } from './dashboard/select-template/select-template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuilderDashboardComponent } from './builder/builder-dashboard.component';
import { BuilderHeaderComponent } from './builder/builder-header/builder-header.component';
import { BuilderSidebarComponent } from './builder/builder-sidebar/builder-sidebar.component';
import { BuilderSidebarPanelComponent } from './builder/builder-sidebar-panel/builder-sidebar-panel.component';
import { BuilderSidebarSettingsComponent } from './builder/builder-sidebar-settings/builder-sidebar-settings.component';
import { DomainSettingsComponent } from './builder/domain-settings/domain-settings.component';
import { GeneralSettingsComponent } from './builder/general-settings/general-settings.component';
import { TransferDomainsComponent } from './dashboard/transfer-domains/transfer-domains.component';
import { AccountHeaderComponent } from './accounts/account-header/account-header.component';
import { AccountFooterComponent } from './accounts/account-footer/account-footer.component';
import { ForgotPasswordComponent } from './accounts/forgot-password/forgot-password.component';
import { SigninComponent } from './accounts/signin/signin.component';
import { CreateAccountComponent } from './accounts/create-account/create-account.component';
import { AccountComponent } from './accounts/account.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: './header/',
      //   pathMatch: 'prefix',
      //   canActivate: [ LandingPagesComponent ]
      // },
      { path: 'landing-pages', component: LandingPagesComponent },
      { path: 'create', component: CreateLandingPagesComponent },
      { path: 'select-template', component: SelectTemplateComponent },
      { path: 'transfer-domains', component: TransferDomainsComponent },
    ]
  },
  {
    path: 'builder',
    component: BuilderDashboardComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: './admin-panel/admin.module#AdminModule',
      //   pathMatch: 'prefix',
      //   canLoad: [ AdminCanLoadService ]
      // }
      { path: 'builder', component: BuilderDashboardComponent },
      { path: 'domain-settings', component: DomainSettingsComponent },
      { path: 'general-settings', component: GeneralSettingsComponent }
    ]
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: './admin-panel/admin.module#AdminModule',
      //   pathMatch: 'prefix',
      //   canLoad: [ AdminCanLoadService ]
      // }
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: SigninComponent },
      { path: 'sign-up', component: CreateAccountComponent },
      { path: 'forgot', component: ForgotPasswordComponent }
    ]
  },
  { path: '**', redirectTo: '' }
  // { path: 'dashboard', component: DashboardComponent },
  
  
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardSidebarComponent,
    LandingPagesComponent,
    CreateLandingPagesComponent,
    SelectTemplateComponent,
    DashboardComponent,
    BuilderDashboardComponent,
    BuilderHeaderComponent,
    BuilderSidebarComponent,
    BuilderSidebarPanelComponent,
    BuilderSidebarSettingsComponent,
    DomainSettingsComponent,
    GeneralSettingsComponent,
    TransferDomainsComponent,
    AccountHeaderComponent,
    AccountFooterComponent,
    ForgotPasswordComponent,
    SigninComponent,
    CreateAccountComponent,
    AccountComponent,
    TestComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
