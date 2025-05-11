import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApNavBarComponent } from './ap-nav-bar.component';

describe('ApNavBarComponent', () => {
  let component: ApNavBarComponent;
  let fixture: ComponentFixture<ApNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
