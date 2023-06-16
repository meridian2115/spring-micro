import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInfoUiComponent } from './shop-info-ui.component';

describe('ShopInfoUiComponent', () => {
  let component: ShopInfoUiComponent;
  let fixture: ComponentFixture<ShopInfoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopInfoUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopInfoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
