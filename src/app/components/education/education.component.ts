import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class Education {
timeline = [
    {
      degree: 'Master of Computer Applications',
      year: '2025 - 2026',
      institute: 'Vellore Institute of Technology, Vellore, Tamilnadu, India',
      description: 'Focused on scalable backend systems, software architecture, cloud computing, cyber security and the intersection of AI and enterprise applications.'
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      year: '2018 - 2022',
      institute: 'Sri Krishna College of Engineering and Technology, Coimbatore, Tamilnadu, India',
      description: 'Built a strong foundation in Java, Python, Data Structures, and SQL, with a focus on software development and engineering principles.'
    }
  ];
}
