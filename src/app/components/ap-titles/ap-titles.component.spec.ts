import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTitlesComponent } from './ap-titles.component';

describe('ApTitlesComponent', () => {
  let component: ApTitlesComponent;
  let fixture: ComponentFixture<ApTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTitlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
