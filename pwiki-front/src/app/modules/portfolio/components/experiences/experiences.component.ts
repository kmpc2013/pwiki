import { Component, signal, inject } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  #dialog = inject(MatDialog);

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Cargo 01',
        p: 'Empresa A | Ago 2023 - Present',
      },
      text: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>",
    },{
      summary: {
        strong: 'Cargo 02',
        p: 'Empresa A | Set 2022 - Ago 2023',
      },
      text: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>",
    },{
      summary: {
        strong: 'Cargo 03',
        p: 'Empresa B | Jan 2020 - Set 2022',
      },
      text: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>",
    },{
      summary: {
        strong: 'Cargo 04',
        p: 'Empresa C | Set 2018 - Jan 2020',
      },
      text: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>",
    },{
      summary: {
        strong: 'Cargo 05',
        p: 'Empresa C | Set 2018 - Jan 2020',
      },
      text: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>",
    }
  ]);
  public openDialog(data: IExperiences) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  };
}
