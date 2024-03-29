import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ProjectsComponent],
  providers: [],
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.scss'
})


export class WikiComponent {

}


