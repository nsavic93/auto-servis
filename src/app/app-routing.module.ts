import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TestComponent } from './components/test/test.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { LoggedInAuthGuard } from './guard/LoggedInAuthGuard';
import { NotLoggedInAuthGuard } from './guard/NotLoggedInAuthGuard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoggedInAuthGuard] },
  { path: 'vehicles', component: VehiclesComponent, canActivate:[NotLoggedInAuthGuard] },
  { path: 'vehicles/:id', component: VehicleComponent, canActivate: [NotLoggedInAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
