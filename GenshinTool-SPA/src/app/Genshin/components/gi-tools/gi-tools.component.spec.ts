import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiToolsComponent } from './gi-tools.component';

describe('GiToolsComponent', () => {
  let component: GiToolsComponent;
  let fixture: ComponentFixture<GiToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
