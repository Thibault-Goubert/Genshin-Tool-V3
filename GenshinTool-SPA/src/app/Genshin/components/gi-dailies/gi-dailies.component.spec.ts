import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiDailiesComponent } from './gi-dailies.component';

describe('GiDailiesComponent', () => {
  let component: GiDailiesComponent;
  let fixture: ComponentFixture<GiDailiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiDailiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiDailiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
