import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSiswaPage } from './data-siswa.page';

describe('DataSiswaPage', () => {
  let component: DataSiswaPage;
  let fixture: ComponentFixture<DataSiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
