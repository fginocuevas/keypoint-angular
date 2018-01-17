import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCatalogComponent } from './skills-catalog.component';

describe('SkillsCatalogComponent', () => {
  let component: SkillsCatalogComponent;
  let fixture: ComponentFixture<SkillsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
