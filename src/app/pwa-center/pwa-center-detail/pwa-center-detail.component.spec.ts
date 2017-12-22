import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaCenterDetailComponent } from './pwa-center-detail.component';

describe('PwaCenterDetailComponent', () => {
  let component: PwaCenterDetailComponent;
  let fixture: ComponentFixture<PwaCenterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaCenterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaCenterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
