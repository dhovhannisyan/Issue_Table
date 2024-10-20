import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssueTableComponent } from './issue-table/issue-table.component';
import { ISSUES_MOCK_DATA } from './mock-data/issues-mock-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IssueTableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Issues Table';
  IssueList = ISSUES_MOCK_DATA;

}
