export interface TodoItem {
  id: number;
  title: string;
  description?: string;
  isComplete: boolean;
  createdAt: Date;
  completedAt?: Date;
}
