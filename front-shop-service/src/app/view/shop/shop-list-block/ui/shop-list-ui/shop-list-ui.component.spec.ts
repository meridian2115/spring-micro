import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListUiComponent } from './shop-list-ui.component';

describe('ShopListUiComponent', () => {
  let component: ShopListUiComponent;
  let fixture: ComponentFixture<ShopListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopListUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
