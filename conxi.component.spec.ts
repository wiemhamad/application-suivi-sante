import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConxiComponent } from './conxi.component';

describe('ConxiComponent', () => {
  let component: ConxiComponent;
  let fixture: ComponentFixture<ConxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConxiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
