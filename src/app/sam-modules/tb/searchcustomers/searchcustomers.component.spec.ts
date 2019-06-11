import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcustomersComponent } from './searchcustomers.component';

describe('SearchcustomersComponent', () => {
  let component: SearchcustomersComponent;
  let fixture: ComponentFixture<SearchcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
