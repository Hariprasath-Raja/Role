  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { MainScreenComponent } from './main-screen/main-screen.component';
  import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { CountryComponent } from './country/country.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { StateComponent } from './state/state.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { GateOutComponent } from './gate-out/gate-out.component';
import { GateInComponent } from './gate-in/gate-in.component';

  const routes: Routes = [
    
    {
    path:'',component:LoginComponent,pathMatch:'full'
    },{path:'main',component:MainScreenComponent, children: [
    { path: 'role', component: RoleComponent },
    { path: 'role-detail', component: RoleDetailComponent },
    { path: 'user-info', component: UserInfoComponent },
    { path: 'gate-in', component: GateInComponent },
    { path: 'gate-out', component: GateOutComponent },
    { path: 'state', component: StateComponent },
    { path: 'country', component: CountryComponent },]
    },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
