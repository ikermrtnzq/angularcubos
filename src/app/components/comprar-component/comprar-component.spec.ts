import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprarComponent } from './comprar-component';

describe('ComprarComponent', () => {
  let component: ComprarComponent;
  let fixture: ComponentFixture<ComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComprarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
