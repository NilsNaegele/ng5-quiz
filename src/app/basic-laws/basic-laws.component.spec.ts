import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLawsComponent } from './basic-laws.component';

describe('BasicLawsComponent', () => {
  let component: BasicLawsComponent;
  let fixture: ComponentFixture<BasicLawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
