import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormUiComponent } from './info-form-ui.component';

describe('InfoFormUiComponent', () => {
  let component: InfoFormUiComponent;
  let fixture: ComponentFixture<InfoFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFormUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
