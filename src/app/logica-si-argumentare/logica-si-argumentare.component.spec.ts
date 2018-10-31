import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaSiArgumentareComponent } from './logica-si-argumentare.component';

describe('LogicaSiArgumentareComponent', () => {
  let component: LogicaSiArgumentareComponent;
  let fixture: ComponentFixture<LogicaSiArgumentareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicaSiArgumentareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicaSiArgumentareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
