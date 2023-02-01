import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UsersComponent } from './components/admin-panel/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TestComponent } from './components/test/test.component';
import { ServiceComponent } from './components/vehicles/vehicle/service/service.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { LoggedInAuthGuard } from './guard/LoggedInAuthGuard';
import { NotAdminAuthGuard } from './guard/NotAdminAuthGuard';
import { NotLoggedInAuthGuard } from './guard/NotLoggedInAuthGuard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoggedInAuthGuard] },
  { path: 'vehicles', component: VehiclesComponent, canActivate:[NotLoggedInAuthGuard] },
  { path: 'vehicles/:id', component: VehicleComponent, canActivate: [NotLoggedInAuthGuard] },
  { path: 'services/:id', component: ServiceComponent, canActivate: [NotLoggedInAuthGuard] },
  { path: 'admin-panel', component: AdminPanelComponent, canActivate: [NotAdminAuthGuard,NotLoggedInAuthGuard], children: [
    {
      path: '',
      component: UsersComponent,
      canActivate: [NotAdminAuthGuard, NotLoggedInAuthGuard]
    },
    {
      path: 'users',
      component: UsersComponent,
      canActivate: [NotAdminAuthGuard, NotLoggedInAuthGuard]
    },
    {
      path: 'create-user',
      component: CreateUserComponent,
      canActivate: [NotAdminAuthGuard, NotLoggedInAuthGuard]
    },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
