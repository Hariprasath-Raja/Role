import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';
import { GateInComponent } from './gate-in/gate-in.component';
import { GateOutComponent } from './gate-out/gate-out.component';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    LoginComponent,
    RoleComponent,
    RoleDetailComponent,
    UserInfoComponent,
    StateComponent,
    CountryComponent,
    GateInComponent,
    GateOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    BrowserAnimationsModule,
    MenubarModule,
    StepsModule,
    TableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
