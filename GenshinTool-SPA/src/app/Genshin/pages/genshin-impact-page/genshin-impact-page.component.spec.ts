import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenshinImpactPageComponent } from './genshin-impact-page.component';

describe('GenshinImpactPageComponent', () => {
  let component: GenshinImpactPageComponent;
  let fixture: ComponentFixture<GenshinImpactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenshinImpactPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenshinImpactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
