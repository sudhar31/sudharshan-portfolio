import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class Skills {
skills = [
    {
      name: 'Backend',
      items: [
        { name: 'Java', icon: 'code' },
        { name: 'Spring Boot', icon: 'integration_instructions' },
        { name: 'REST APIs', icon: 'api' },
        { name: 'Python', icon: 'terminal' },
        { name: 'Flask', icon: 'web' },
        { name: 'SQL', icon: 'storage' },
      ],
    },
    {
      name: 'DevOps',
      items: [
        { name: 'Docker', icon: 'layers' },
        { name: 'Jenkins', icon: 'build_circle' },
        { name: 'Git', icon: 'merge_type' },
        { name: 'Postman', icon: 'send' },
        { name: 'SonarQube', icon: 'analytics' },
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'Angular', icon: 'view_in_ar' },
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS3', icon: 'css' },
        { name: 'Bootstrap', icon: 'web_asset' },
      ],
    },
    {
      name: 'AI & GenAI',
      items: [
        { name: 'Prompt Engineering', icon: 'psychology' },
        { name: 'OpenAI APIs', icon: 'hub' },
        { name: 'Jupyter', icon: 'science' },
        { name: 'Responsible AI', icon: 'shield' },
        { name: 'Flask (AI)', icon: 'memory' },
      ],
    },
    {
      name: 'Tools & IDEs',
      items: [
        { name: 'IntelliJ IDEA', icon: 'developer_board' },
        { name: 'VS Code', icon: 'code' },
        { name: 'Jira', icon: 'task' },
        { name: 'Confluence', icon: 'library_books' },
        { name: 'Pycharm', icon: 'terminal' },
      ],
    },
    {
      name: 'Soft Skills',
      items: [
        { name: 'Teamwork', icon: 'groups' },
        { name: 'Communication', icon: 'record_voice_over' },
        { name: 'Initiative', icon: 'bolt' },
        { name: 'Simplicity-Focused Thinking', icon: 'lightbulb' },
      ],
    },
  ];
}
