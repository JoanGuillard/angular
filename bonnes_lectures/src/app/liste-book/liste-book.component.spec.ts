import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBookComponent } from './liste-book.component';

describe('ListeBookComponent', () => {
  let component: ListeBookComponent;
  let fixture: ComponentFixture<ListeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
