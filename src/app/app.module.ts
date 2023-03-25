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
import { MatTableModule } from '@angular/material/table';
import { ServiceComponent } from './components/vehicles/vehicle/service/service.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { NotAdminAuthGuard } from './guard/NotAdminAuthGuard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersComponent } from './components/admin-panel/users/users.component';
import { UsersService } from './services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { UsersVehiclesComponent } from './components/admin-panel/users/users-vehicles/users-vehicles.component';
import { UserVehicleComponent } from './components/admin-panel/users/users-vehicles/user-vehicle/user-vehicle.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';
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
    UsersVehiclesComponent,
    UserVehicleComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    
    BrowserModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    FontAwesomeModule,
    CommonModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgSelectModule
  ],
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
export class AppModule { }
