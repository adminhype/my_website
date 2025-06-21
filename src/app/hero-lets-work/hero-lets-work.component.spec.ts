import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLetsWorkComponent } from './hero-lets-work.component';

describe('HeroLetsWorkComponent', () => {
  let component: HeroLetsWorkComponent;
  let fixture: ComponentFixture<HeroLetsWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLetsWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLetsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
