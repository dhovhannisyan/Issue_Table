import { ISSUE_STATUS } from "./Issue-status.enum";

export interface IssueI {
  id: number | string;
  name: string;
  message: string;
  status: ISSUE_STATUS;
  selected: boolean;
}
