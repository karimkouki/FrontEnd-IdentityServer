import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFromComponentsComponent } from './client-from-components.component';

describe('ClientFromComponentsComponent', () => {
  let component: ClientFromComponentsComponent;
  let fixture: ComponentFixture<ClientFromComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFromComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFromComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
