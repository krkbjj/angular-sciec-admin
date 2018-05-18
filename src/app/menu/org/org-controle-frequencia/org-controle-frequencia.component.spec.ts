import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgControleFrequenciaComponent } from './org-controle-frequencia.component';

describe('OrgControleFrequenciaComponent', () => {
  let component: OrgControleFrequenciaComponent;
  let fixture: ComponentFixture<OrgControleFrequenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgControleFrequenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgControleFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
