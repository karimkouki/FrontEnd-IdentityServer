import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APiScopesComponent } from './api-scopes.component';

describe('APiScopesComponent', () => {
  let component: APiScopesComponent;
  let fixture: ComponentFixture<APiScopesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APiScopesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APiScopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
