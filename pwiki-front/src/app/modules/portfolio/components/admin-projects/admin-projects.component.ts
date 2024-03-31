import { Component, Inject, TemplateRef } from '@angular/core';
import { BackService } from '../../services/back.service';
import { IDocuments } from '../../interface/IDocuments.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

export interface DialogData {
  id: number;
  title: string;
}

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

  constructor(
    private BackService: BackService,
    public dialog: MatDialog,
  ) {}

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
      event.preventDefault(); // Impede a ação padrão do evento (atualização da tela)
      console.log('handleKeyPress');
      this.search(event); // Chama a função de busca
    }
  }

  openDialogEdit(id: Number, doc: String): void {
    const dialogRef = this.dialog.open(DialogEditDialog, {
      data: { id: id, title: doc },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openDialogDelete(id: Number, doc: String): void {
    const dialogRef = this.dialog.open(DialogDelete, {
      data: { id: id, title: doc },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'dialog-delete',
  templateUrl: 'dialog-delete.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogContent],
})
export class DialogDelete {
  constructor(
    public dialogRef: MatDialogRef<DialogDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private BackService: BackService
  ) {}

  public arrayProjects: IDocuments[] = [];
  public arrayFiltered: IDocuments[] = [];

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteDoc(id: number): void {
    this.dialogRef.close();
    this.BackService.deleteDocs(id).subscribe()
    window.location.reload()
  }
}
@Component({
  selector: 'dialog-edit',
  templateUrl: 'dialog-edit.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogContent],
})
export class DialogEditDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private BackService: BackService,
    private formBuilder: UntypedFormBuilder
  ) {}

  public arrayProjects: IDocuments[] = [];
  public arrayFiltered: IDocuments[] = [];

  onNoClick(): void {
    this.dialogRef.close();
  }

  editDoc(): void {
    this.dialogRef.close();
    // this.BackService.editDocs(this.formGroup.value).subscribe()
    window.location.reload()
  }
}