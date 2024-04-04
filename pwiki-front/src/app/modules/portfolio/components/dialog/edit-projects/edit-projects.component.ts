import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IDocuments } from '../../../interface/IDocuments.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackService } from '../../../services/back.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-edit-projects',
  standalone: true,
  imports: [MatDialogModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-projects.component.html',
  styleUrl: './edit-projects.component.scss'
})
export class EditProjectsComponent {
  formGroup!: FormGroup;
  veeamInterface!: IDocuments;

  constructor(
    private _diaLogRef: MatDialogRef<EditProjectsComponent>,
    private formBuilder: FormBuilder,
    private backService: BackService,
    public matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private _data: IDocuments
  ) {}
  public getData = signal<IDocuments | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
    this.formGroup = this.formBuilder.group({
      id: [''],
      title: [''],
      type: [''],
      descr: [''],
      link: ['']
    });
  }

  public closeModal() {
    return this._diaLogRef.close();
  }

  salvar() {
    console.log(this.formGroup.value);
    this.backService.editDocs(this.formGroup.value).subscribe({
      next: (addEntry) => {
        window.location.reload();
        alert("Editado com sucesso!");
      },
      error: (error) => {
        alert("Erro ao editar");
      },
    });
  }
}
