import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySeriesComponent } from './play-series.component';

describe('PlaySeriesComponent', () => {
  let component: PlaySeriesComponent;
  let fixture: ComponentFixture<PlaySeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaySeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
