import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminFormulirPage } from './admin-formulir.page';

describe('AdminFormulirPage', () => {
  let component: AdminFormulirPage;
  let fixture: ComponentFixture<AdminFormulirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormulirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
