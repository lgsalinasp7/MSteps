// Auth types
export type UserRole = 'admin' | 'teacher' | 'parent';

export interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
  email?: string;
  organization?: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}
