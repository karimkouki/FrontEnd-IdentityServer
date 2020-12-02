import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityComponentComponent } from './identity-component.component';

describe('IdentityComponentComponent', () => {
  let component: IdentityComponentComponent;
  let fixture: ComponentFixture<IdentityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
