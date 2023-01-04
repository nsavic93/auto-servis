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
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    LoginComponent,
    VehiclesComponent,
    VehicleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatSlideToggleModule,MatTableModule],
  providers: [
    LoginService,
    VehiclesService,
    LoggedInAuthGuard,
    NotLoggedInAuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
