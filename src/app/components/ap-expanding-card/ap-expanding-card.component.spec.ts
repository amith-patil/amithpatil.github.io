import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApExpandingCardComponent } from './ap-expanding-card.component';

describe('ApExpandingCardComponent', () => {
  let component: ApExpandingCardComponent;
  let fixture: ComponentFixture<ApExpandingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApExpandingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApExpandingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
