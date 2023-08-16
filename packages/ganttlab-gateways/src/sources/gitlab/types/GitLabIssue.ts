import { GitLabMilestone } from './GitLabMilestone';

export interface GitLabIssue {
  title: string;
  web_url: string;
  created_at: string;
  description: string;
  due_date: string;
  milestone: GitLabMilestone | null;
  time_stats: {
    time_estimate: number;
    total_time_spent: number;
  };
}
