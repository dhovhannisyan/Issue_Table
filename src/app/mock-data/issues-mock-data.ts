import { ISSUE_STATUS } from "../types/Issue-status.enum";
import { IssueI } from "../types/Issue.interface";

export const ISSUES_MOCK_DATA: IssueI[] = [
  {
    id: 1,
    name: 'Login Issue',
    message: 'User unable to login with valid credentials',
    status: ISSUE_STATUS.OPEN,
    selected: false,
  },
  {
    id: 2,
    name: 'Page Load Timeout',
    message: 'Dashboard page takes too long to load',
    status: ISSUE_STATUS.RESOLVED,
    selected: false,
  },
  {
    id: 3,
    name: 'Broken Link',
    message: 'Profile page contains a broken link to settings',
    status: ISSUE_STATUS.OPEN,
    selected: false,
  },
  {
    id: 4,
    name: 'Incorrect Data Display',
    message: 'Order history shows incorrect totals for some users',
    status: ISSUE_STATUS.RESOLVED,
    selected: false,
  },
  {
    id: 5,
    name: 'Mobile View Issue',
    message: 'Elements on the homepage are misaligned on mobile',
    status: ISSUE_STATUS.OPEN,
    selected: false,
  },
]
