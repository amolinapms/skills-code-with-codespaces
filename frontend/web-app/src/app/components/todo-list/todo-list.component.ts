import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../models/todo-item.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  todoItems: TodoItem[] = [];
  newTodoTitle = '';
  newTodoDescription = '';
  isLoading = false;
  error: string | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodoItems();
  }

  loadTodoItems(): void {
    this.isLoading = true;
    this.error = null;
    this.todoService.getTodoItems().subscribe({
      next: (items) => {
        this.todoItems = items;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load todo items. Please ensure the API is running.';
        this.isLoading = false;
        console.error('Error loading todos:', err);
      }
    });
  }

  addTodoItem(): void {
    if (!this.newTodoTitle.trim()) {
      return;
    }

    const newItem: Partial<TodoItem> = {
      title: this.newTodoTitle.trim(),
      description: this.newTodoDescription.trim() || undefined,
      isComplete: false
    };

    this.todoService.createTodoItem(newItem).subscribe({
      next: (item) => {
        this.todoItems.push(item);
        this.newTodoTitle = '';
        this.newTodoDescription = '';
      },
      error: (err) => {
        this.error = 'Failed to add todo item.';
        console.error('Error adding todo:', err);
      }
    });
  }

  toggleComplete(item: TodoItem): void {
    const updatedItem = { 
      ...item, 
      isComplete: !item.isComplete,
      completedAt: !item.isComplete ? new Date() : undefined
    };

    this.todoService.updateTodoItem(item.id, updatedItem).subscribe({
      next: () => {
        item.isComplete = updatedItem.isComplete;
        item.completedAt = updatedItem.completedAt;
      },
      error: (err) => {
        this.error = 'Failed to update todo item.';
        console.error('Error updating todo:', err);
      }
    });
  }

  deleteTodoItem(item: TodoItem): void {
    this.todoService.deleteTodoItem(item.id).subscribe({
      next: () => {
        this.todoItems = this.todoItems.filter(t => t.id !== item.id);
      },
      error: (err) => {
        this.error = 'Failed to delete todo item.';
        console.error('Error deleting todo:', err);
      }
    });
  }
}
