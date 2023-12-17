import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactCardComponent } from './artefact-card.component';

describe('ArtefactCardComponent', () => {
  let component: ArtefactCardComponent;
  let fixture: ComponentFixture<ArtefactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtefactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtefactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
