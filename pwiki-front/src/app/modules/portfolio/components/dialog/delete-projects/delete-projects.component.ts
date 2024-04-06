import { Component, Inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BackService } from '../../../services/back.service';
import { IDocuments } from '../../../interface/IDocuments.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-projects',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogContent],
  templateUrl: './delete-projects.component.html',
  styleUrl: './delete-projects.component.scss',
})
export class DeleteProjectsComponent {
  formGroup!: FormGroup;
  veeamInterface!: IDocuments;
  
  constructor(
    public dialogRef: MatDialogRef<DeleteProjectsComponent>,
    private backService: BackService,
    private formBuilder: FormBuilder,
    public matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private _data: IDocuments
  ) {}
  public getData = signal<IDocuments | null>(null);

  public arrayProjects: IDocuments[] = [];
  public arrayFiltered: IDocuments[] = [];

  ngOnInit(): void {
    this.getData.set(this._data);
    this.formGroup = this.formBuilder.group({
      id: this.getData()!.id,
      title: this.getData()!.title,
      type: this.getData()!.type,
      descr: this.getData()!.descr,
      link: this.getData()!.link,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteDoc() {
    console.log(this.formGroup.value);
    this.backService.deleteDocs(this.formGroup.value).subscribe({
      next: (addEntry) => {
        window.location.reload();
        alert('Deletado com sucesso!');
      },
      error: (error) => {
        alert('Erro ao deletar');
      },
    });
  }
}
