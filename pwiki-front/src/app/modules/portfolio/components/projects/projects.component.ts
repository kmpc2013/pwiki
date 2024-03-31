import { Component } from '@angular/core';
import { BackService } from '../../services/back.service';
import { IDocuments } from '../../interface/IDocuments.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayFiltered: IDocuments[] = [];
  public arrayProjects: IDocuments[] = [];

  constructor(private BackService: BackService) {}

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
}
