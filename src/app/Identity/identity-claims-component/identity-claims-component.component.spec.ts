import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityClaimsComponentComponent } from './identity-claims-component.component';

describe('IdentityClaimsComponentComponent', () => {
  let component: IdentityClaimsComponentComponent;
  let fixture: ComponentFixture<IdentityClaimsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityClaimsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityClaimsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
