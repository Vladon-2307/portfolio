import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  imports: [],
  templateUrl: './stack.component.html',
  standalone: true,
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  stackS: string[] = [
    "Angular",
    "NestJS",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "CSS",
    "SCSS",
    "HTML",
  ]
  stackN: string[] = [
    "Python",
    "C#",
    "1C",
    "SEO",
    "Postgres",
    "MySQL",
    "REST",
    "Docker",
    "Git",
    "GitLab (Ci/CD)",
    "Linux",
    "English - Beginner (A1)",
  ]
}
