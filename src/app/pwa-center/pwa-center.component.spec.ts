import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaCenterComponent } from './pwa-center.component';

describe('PwaCenterComponent', () => {
  let component: PwaCenterComponent;
  let fixture: ComponentFixture<PwaCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
