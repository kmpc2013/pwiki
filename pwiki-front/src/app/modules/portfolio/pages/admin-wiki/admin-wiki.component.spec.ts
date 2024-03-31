import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWikiComponent } from './admin-wiki.component';

describe('AdminWikiComponent', () => {
  let component: AdminWikiComponent;
  let fixture: ComponentFixture<AdminWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminWikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
