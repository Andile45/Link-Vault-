// Link interface for storing bookmark data
export interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Form data interface for link creation/editing
export interface LinkFormData {
  title: string;
  url: string;
  description: string;
  tags: string;
}

// Search filters interface
export interface SearchFilters {
  query: string;
  searchBy: 'all' | 'title' | 'url' | 'description' | 'tags';
}

// Notification state interface
export interface NotificationState {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
}