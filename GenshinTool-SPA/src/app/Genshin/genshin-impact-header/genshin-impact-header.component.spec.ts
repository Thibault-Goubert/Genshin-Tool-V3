import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenshinImpactHeaderComponent } from './genshin-impact-header.component';

describe('GenshinImpactHeaderComponent', () => {
  let component: GenshinImpactHeaderComponent;
  let fixture: ComponentFixture<GenshinImpactHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenshinImpactHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenshinImpactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
