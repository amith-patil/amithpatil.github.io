import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApSkillsMarqueeComponent } from './ap-skills-marquee.component';

describe('ApSkillsMarqueeComponent', () => {
  let component: ApSkillsMarqueeComponent;
  let fixture: ComponentFixture<ApSkillsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApSkillsMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApSkillsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
