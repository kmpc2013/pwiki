import { Component, Inject, inject, TemplateRef } from '@angular/core';
import { BackService } from '../../services/back.service';
import { IDocuments } from '../../interface/IDocuments.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { EditProjectsComponent } from '../dialog/edit-projects/edit-projects.component';
import { DeleteProjectsComponent } from '../dialog/delete-projects/delete-projects.component';
import { CreateProjectsComponent } from '../dialog/create-projects/create-projects.component';

@Component({
  selector: 'app-admin-projects',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './admin-projects.component.html',
  styleUrl: './admin-projects.component.scss',
})
export class AdminProjectsComponent {
  public arrayFiltered: IDocuments[] = [];
  public arrayProjects: IDocuments[] = [];
  #dialog = inject(MatDialog);

  constructor(private BackService: BackService, public dialog: MatDialog) {}

  search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    console.log('search');
    this.arrayFiltered = this.arrayProjects.filter((arrayFiltered) => {
      return arrayFiltered.title.toLowerCase().includes(value.toLowerCase());
    });
  }

  public setTypeDocColor(docType: string) {
    switch (docType) {
      case 'Projeto':
        return '#FFE4E1';
      case 'Procedimento':
        return '#7FFFD4';
      case 'Paper':
        return '#B0E0E6';
      default:
        return '#D3D3D3';
    }
  }

  getDocs() {
    this.BackService.getDocs().subscribe((data: IDocuments[]) => {
      this.arrayProjects = data;
      this.arrayFiltered = this.arrayProjects;
    });
  }

  ngOnInit() {
    this.getDocs();
  }

  public handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      console.log('handleKeyPress');
      this.search(event); 
    }
  }

  public openDialogEdit(data: IDocuments) {
    this.#dialog.open(EditProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

  public openDialogDelete(data: IDocuments) {
    this.#dialog.open(DeleteProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

  public openDialogCreate(event: Event) {
    event.preventDefault();
    this.#dialog.open(CreateProjectsComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
