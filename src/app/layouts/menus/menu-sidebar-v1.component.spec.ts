import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSidebarV1Component } from './menu-sidebar-v1.component';

describe('MenuSidebarV1Component', () => {
  let component: MenuSidebarV1Component;
  let fixture: ComponentFixture<MenuSidebarV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSidebarV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSidebarV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
