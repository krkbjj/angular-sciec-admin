import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgMeusEventosComponent } from './org-meus-eventos.component';

describe('OrgMeusEventosComponent', () => {
  let component: OrgMeusEventosComponent;
  let fixture: ComponentFixture<OrgMeusEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgMeusEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgMeusEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
