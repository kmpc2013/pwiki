import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectsComponent } from './delete-projects.component';

describe('DeleteProjectsComponent', () => {
  let component: DeleteProjectsComponent;
  let fixture: ComponentFixture<DeleteProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
