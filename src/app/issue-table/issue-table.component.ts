import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IssueI } from '../types/Issue.interface';
import { FormsModule } from '@angular/forms';
import { ISSUE_STATUS } from '../types/Issue-status.enum';


@Component({
  selector: 'app-issue-table',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatCheckboxModule
  ],
  templateUrl: './issue-table.component.html',
  styleUrl: './issue-table.component.scss'
})
export class IssueTableComponent {

    @Input() issues: IssueI[];
    selectedCount = 0;
    isAllSelected = false;
    displayedColumns: string[] = ['selected', 'name', 'message', 'status'];
    ISSUE_STATUS = ISSUE_STATUS;

    onIssueSelect(issue: IssueI) {
      if (issue.status === this.ISSUE_STATUS.OPEN) {
        this.setSelectedCount();
        this.setAllSelected();
      } else {
        issue.selected = false;
      }
    }

    setSelectedCount() {
      this.selectedCount = this.issues.filter(issue => (issue.status === this.ISSUE_STATUS.OPEN) && issue.selected).length;
    }

    setAllSelected() {
      const openIssues = this.issues.filter(i => i.status === this.ISSUE_STATUS.OPEN);
      this.isAllSelected = openIssues.every(issue => issue.selected);
    }

    selectOrUnselectAll(selectAll: boolean) {
      const openIssues = this.issues.filter(i => i.status === this.ISSUE_STATUS.OPEN);
      openIssues.forEach(issue => issue.selected = selectAll);
      this.isAllSelected = selectAll;
      this.setSelectedCount();
    }

    onRowClick(row) {
      console.log(row);

    }

}
