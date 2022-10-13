import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepartoComponent } from './create-reparto.component';

describe('CreateRepartoComponent', () => {
  let component: CreateRepartoComponent;
  let fixture: ComponentFixture<CreateRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRepartoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
