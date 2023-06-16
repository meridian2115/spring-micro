import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListBlockComponent } from './shop-list-block.component';

describe('ShopListBlockComponent', () => {
  let component: ShopListBlockComponent;
  let fixture: ComponentFixture<ShopListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopListBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
