import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLawDetailComponent } from './basic-law-detail.component';

describe('BasicLawDetailComponent', () => {
  let component: BasicLawDetailComponent;
  let fixture: ComponentFixture<BasicLawDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLawDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLawDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
