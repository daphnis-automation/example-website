import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopV1Component } from './menu-top-v1.component';

describe('MenuTopV1Component', () => {
  let component: MenuTopV1Component;
  let fixture: ComponentFixture<MenuTopV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTopV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTopV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
