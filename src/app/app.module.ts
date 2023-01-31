import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle.component';
import { LoggedInAuthGuard } from './guard/LoggedInAuthGuard';
import { NotLoggedInAuthGuard } from './guard/NotLoggedInAuthGuard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { ServiceComponent } from './components/vehicles/vehicle/service/service.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { NotAdminAuthGuard } from './guard/NotAdminAuthGuard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersComponent } from './components/admin-panel/users/users.component';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    LoginComponent,
    VehiclesComponent,
    VehicleComponent,
    ServiceComponent,
    AdminPanelComponent,
    CreateUserComponent,
    UsersComponent,
   
  ],
  imports: [FormsModule,BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatSlideToggleModule,MatTableModule],
  providers: [
    LoginService,
    VehiclesService,
    UsersService,
    LoggedInAuthGuard,
    NotLoggedInAuthGuard,
    NotAdminAuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
