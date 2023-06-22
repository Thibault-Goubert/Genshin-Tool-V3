import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelectPickerComponent } from './my-select-picker.component';

describe('MySelectPickerComponent', () => {
  let component: MySelectPickerComponent;
  let fixture: ComponentFixture<MySelectPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySelectPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySelectPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
