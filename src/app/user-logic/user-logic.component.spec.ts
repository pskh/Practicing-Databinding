import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogicComponent } from './user-logic.component';

describe('UserLogicComponent', () => {
  let component: UserLogicComponent;
  let fixture: ComponentFixture<UserLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
