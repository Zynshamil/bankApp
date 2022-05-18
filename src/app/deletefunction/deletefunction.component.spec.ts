import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletefunctionComponent } from './deletefunction.component';

describe('DeletefunctionComponent', () => {
  let component: DeletefunctionComponent;
  let fixture: ComponentFixture<DeletefunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletefunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletefunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
