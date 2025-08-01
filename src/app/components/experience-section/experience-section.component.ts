import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: false,
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})


export class ExperienceSection {
experiences = [
    {
      role: 'Associate Software Engineer',
      company: 'CGI Information Systems and Management Consultants Pvt Ltd, Bengaluru, India',
      duration: '08/2022 – 12/2023',
      points: [
        'Engineered Java + Spring Boot microservices boosting transaction speed by 30%.',
        'Integrated PostgreSQL and Oracle, reducing API latency by 25%.',
        'Automated CI/CD via Jenkins, cutting deployment errors by 20%.'
      ]
    },
    {
      role: 'Engineering Intern',
      company: 'CGI Information Systems and Management Consultants Pvt Ltd, Remote, Chennai, India',
      duration: '05/2022 – 07/2022',
      points: [
        'Built RESTful services with Java 11+ and Spring Boot.',
        'Dockerized apps for Linux deployments, reducing friction.',
        'Refactored SQL/JDBC logic, boosting data efficiency by 25%.'
      ]
    }
  ];
}
