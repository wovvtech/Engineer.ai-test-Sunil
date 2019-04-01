import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolllistComponent } from './polllist.component';

describe('PolllistComponent', () => {
  let component: PolllistComponent;
  let fixture: ComponentFixture<PolllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
