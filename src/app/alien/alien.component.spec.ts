import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienComponent } from './alien.component';

describe('AlienComponent', () => {
  let component: AlienComponent;
  let fixture: ComponentFixture<AlienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
