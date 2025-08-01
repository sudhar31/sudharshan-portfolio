import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  featuredProject = FEATURED_PROJECT;
  personalProjects = PERSONAL_PROJECTS;
}

export interface Project {
  title: string;
  duration: string;
  description: string;
  image: string;
  link?: string;
  tech?: string[];
}

export const FEATURED_PROJECT: Project = {
  title: 'CGI Trade 360',
  duration: 'Dec 2022 – Dec 2023',
  description: `Securely engineered and supported backend transactions for a high-availability banking system using Java and Spring Boot. 
Led environment readiness testing across SIT and UAT phases. 
Maintained production reliability, documented systems, and promoted knowledge sharing.`,
  image: 'https://images.unsplash.com/photo-1753854796206-84773610c096?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  link: 'https://www.cgi.com/en/solution/banking-capital-markets/trade-finance/trade360',
  tech: ['Java', 'Spring Boot', 'UAT', 'SIT', 'CI/CD', 'Angular', 'MySQL']
};

export const PERSONAL_PROJECTS: Project[] = [
  {
    title: 'ShanAI',
    duration: 'Jun 2025',
    description: 'AI assistant using Flask, LLms, OpenAI APIs, and Jupyter Notebook. Integrated into the portfolio.',
    image: 'https://images.unsplash.com/photo-1753858718504-6af7b06e0388?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/sudhar31/ShanAI',
    tech: ['Flask', 'LLMs', 'OpenAI', 'Jupyter']
  },
  {
    title: 'Glacial Bliss',
    duration: 'Jul 2024 – Nov 2024',
    description: 'Modular ice cream ordering system leveraging secure multithreaded Java for concurrent user requests.',
    image: 'https://images.unsplash.com/photo-1753866140367-cc1a83adf80b?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/sudhar31/Glacial-Bliss',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Multithreading', 'REST APIs']
  },
  {
    title: 'Personal Portfolio Website',
    duration: 'Aug 2024',
    description: 'A responsive, clean portfolio to showcase skills and projects with GitHub integration.',
    image: 'https://images.unsplash.com/photo-1753858587222-ccf383d2ebff?q=80&w=1208&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://sudhar31.github.io/sudharshan_blog/',
    tech: ['Angular', 'Bootstrap', 'GitHub']
  },
  {
    title: 'Amusement Park Ticketing System',
    duration: 'Jun 2024',
    description: 'Full-stack app with dynamic ticket booking, live updates, and user authentication.',
    image: 'https://images.unsplash.com/photo-1753857054928-1239e2887215?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/sudhar31/Amusement-Park-Ticketing-System-Project',
    tech: ['Spring Boot', 'Angular', 'MySQL']
  },
  {
    title: 'Tin Dog',
    duration: 'Jun 2024',
    description: 'A web application for dog enthusiasts to connect with nearby dogs.',
    image: 'https://images.unsplash.com/photo-1753857614315-26455eca8dc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://sudhar31.github.io/Tin-Dog-Website/',
    tech: ['Bootstrap', 'Layouts', 'Angular', 'Grids','Flexbox']
  }
];

