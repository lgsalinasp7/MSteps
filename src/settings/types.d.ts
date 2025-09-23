export type Theme = 'light' | 'dark';
export type Container = 'centered' | 'none';

// Auth types
export type UserRole = 'admin' | 'user' | 'teacher' | 'parent';

export interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}
