import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedStories2Component } from './related-stories2.component';

describe('RelatedStories2Component', () => {
  let component: RelatedStories2Component;
  let fixture: ComponentFixture<RelatedStories2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatedStories2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedStories2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
