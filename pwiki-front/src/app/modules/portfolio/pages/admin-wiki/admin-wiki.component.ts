import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AdminProjectsComponent } from '../../components/admin-projects/admin-projects.component';

@Component({
  selector: 'app-admin-wiki',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,AdminProjectsComponent],
  templateUrl: './admin-wiki.component.html',
  styleUrl: './admin-wiki.component.scss'
})
export class AdminWikiComponent {

}
