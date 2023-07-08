import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsrToolsComponent } from './hsr-tools.component';

describe('HsrToolsComponent', () => {
  let component: HsrToolsComponent;
  let fixture: ComponentFixture<HsrToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsrToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsrToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
