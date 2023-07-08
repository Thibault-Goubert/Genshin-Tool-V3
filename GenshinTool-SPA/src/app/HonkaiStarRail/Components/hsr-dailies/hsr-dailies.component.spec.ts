import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsrDailiesComponent } from './hsr-dailies.component';

describe('HsrDailiesComponent', () => {
  let component: HsrDailiesComponent;
  let fixture: ComponentFixture<HsrDailiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsrDailiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsrDailiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
