import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AccountComponent } from './accounts/account.component';
import { TestComponent } from './test/test.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { CreateComponent } from './builder/create/create.component';
import { LoginCheck } from './login-service.guard';
import { AuthGuardService } from './auth.guard';
import { AccountHeaderComponent } from './accounts/account-header/account-header.component';
import { AccountFooterComponent } from './accounts/account-footer/account-footer.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',    
    component: AccountComponent,    
    canActivate: [LoginCheck],
    loadChildren: './accounts/auth.module#AuthModule'
  },
  { path: 'test', component: TestComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent,
    children: [
      { path: 'landing-pages', component: LandingPagesComponent },
      { path: 'create', component: CreateLandingPagesComponent },
      { path: 'select-template', component: SelectTemplateComponent },
      { path: 'transfer-domains', component: TransferDomainsComponent },
      { path: 'messages', component: MessagesComponent },
    ]
  },
  {
    path: 'builder',
    canActivate: [AuthGuardService],
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
      { path: 'general-settings', component: GeneralSettingsComponent },
      { path: 'create', component: CreateComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
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
    AccountComponent,
    TestComponent,
    MessagesComponent,
    CreateComponent,    
    AccountHeaderComponent,
    AccountFooterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
