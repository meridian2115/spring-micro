import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInfoBlockComponent } from './shop-info-block.component';

describe('ShopInfoBlockComponent', () => {
  let component: ShopInfoBlockComponent;
  let fixture: ComponentFixture<ShopInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopInfoBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
