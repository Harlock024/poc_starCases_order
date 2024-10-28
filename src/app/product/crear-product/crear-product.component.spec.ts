import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductComponent } from './crear-product.component';

describe('CrearProductComponent', () => {
  let component: CrearProductComponent;
  let fixture: ComponentFixture<CrearProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
