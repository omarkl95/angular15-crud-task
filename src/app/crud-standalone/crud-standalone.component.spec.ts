import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudStandaloneComponent } from './crud-standalone.component';

describe('CrudStandaloneComponent', () => {
  let component: CrudStandaloneComponent;
  let fixture: ComponentFixture<CrudStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CrudStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
