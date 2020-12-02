import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityClaimsFromComponentComponent } from './identity-claims-from-component.component';

describe('IdentityClaimsFromComponentComponent', () => {
  let component: IdentityClaimsFromComponentComponent;
  let fixture: ComponentFixture<IdentityClaimsFromComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityClaimsFromComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityClaimsFromComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
