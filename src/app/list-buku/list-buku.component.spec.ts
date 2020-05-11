import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBukuComponent } from './list-buku.component';

describe('ListBukuComponent', () => {
  let component: ListBukuComponent;
  let fixture: ComponentFixture<ListBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
