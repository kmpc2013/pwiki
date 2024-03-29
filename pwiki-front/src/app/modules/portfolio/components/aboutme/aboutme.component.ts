import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/css3.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/angular.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/javascript.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/python.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/docker.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/aws.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
  ]);
}
