import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonsFormComponent } from './moons-form.component';

describe('MoonsFormComponent', () => {
  let component: MoonsFormComponent;
  let fixture: ComponentFixture<MoonsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
