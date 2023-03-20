import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersVehiclesComponent } from './users-vehicles.component';

describe('UsersVehiclesComponent', () => {
  let component: UsersVehiclesComponent;
  let fixture: ComponentFixture<UsersVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
