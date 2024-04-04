import { Component, Inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDocuments } from '../../../interface/IDocuments.interface';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackService } from '../../../services/back.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-projects',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './create-projects.component.html',
  styleUrl: './create-projects.component.scss',
})
export class CreateProjectsComponent {
  formGroup!: FormGroup;
  veeamInterface!: IDocuments;

  constructor(
    private _diaLogRef: MatDialogRef<CreateProjectsComponent>,
    private formBuilder: FormBuilder,
    private backService: BackService,
    public matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private _data: IDocuments
  ) {}
  public getData = signal<IDocuments | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
    this.formGroup = this.formBuilder.group({
      title: [''],
      type: [''],
      descr: [''],
      link: [''],
    });
  }

  public closeModal() {
    return this._diaLogRef.close();
  }

  salvar() {
    console.log(this.formGroup.value);
    this.backService.createDocs(this.formGroup.value).subscribe({
      next: (addEntry) => {
        window.location.reload();
        alert('Criado com sucesso!');
      },
      error: (error) => {
        alert('Erro ao criar');
      },
    });
  }
}
