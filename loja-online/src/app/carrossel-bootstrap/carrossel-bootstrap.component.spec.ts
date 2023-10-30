import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselBootstrapComponent } from './carrossel-bootstrap.component';

describe('CarrosselBootstrapComponent', () => {
  let component: CarrosselBootstrapComponent;
  let fixture: ComponentFixture<CarrosselBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosselBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
