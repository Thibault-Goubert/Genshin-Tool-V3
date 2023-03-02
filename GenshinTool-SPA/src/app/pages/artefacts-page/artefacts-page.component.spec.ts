import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactsPageComponent } from './artefacts-page.component';

describe('ArtefactsPageComponent', () => {
  let component: ArtefactsPageComponent;
  let fixture: ComponentFixture<ArtefactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtefactsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtefactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
