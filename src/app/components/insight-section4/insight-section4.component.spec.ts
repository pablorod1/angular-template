import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightSection4Component } from './insight-section4.component';

describe('InsightSection4Component', () => {
  let component: InsightSection4Component;
  let fixture: ComponentFixture<InsightSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsightSection4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsightSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
