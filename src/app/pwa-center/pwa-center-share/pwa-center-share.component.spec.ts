import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaCenterShareComponent } from './pwa-center-share.component';

describe('PwaCenterShareComponent', () => {
  let component: PwaCenterShareComponent;
  let fixture: ComponentFixture<PwaCenterShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaCenterShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaCenterShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
