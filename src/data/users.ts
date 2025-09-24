import { UserRole } from '@/settings/types';

export interface UserCredentials {
  id: string;
  username: string;
  password: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
  organization?: string;
  permissions?: string[];
}

// Base de datos simulada de usuarios
export const USERS_DATABASE: UserCredentials[] = [
  // ADMINISTRADORES
  {
    id: 'admin-001',
    username: 'admin',
    password: 'admin123',
    name: 'Carlos Rodríguez',
    role: 'admin',
    email: 'carlos.rodriguez@mastersteps.com',
    organization: 'Mastersteps Central',
    permissions: ['all']
  },
  {
    id: 'admin-002', 
    username: 'admin@mastersteps.com',
    password: 'admin2024',
    name: 'Ana García',
    role: 'admin',
    email: 'ana.garcia@mastersteps.com',
    organization: 'Mastersteps Central',
    permissions: ['all']
  },
  
  // MAESTROS/TEACHERS
  {
    id: 'teacher-001',
    username: 'maestra.maria',
    password: 'maria123',
    name: 'María Elena Vásquez',
    role: 'teacher',
    email: 'maria.vasquez@iglesia-central.com',
    organization: 'Iglesia Central',
    permissions: ['classes', 'students', 'content']
  },
  {
    id: 'teacher-002',
    username: 'teacher',
    password: 'teacher123',
    name: 'Rosa Isabel Morales',
    role: 'teacher',
    email: 'rosa.morales@iglesia-betania.com',
    organization: 'Iglesia Betania',
    permissions: ['classes', 'students', 'content']
  },
  {
    id: 'teacher-003',
    username: 'prof.lucia',
    password: 'lucia456',
    name: 'Lucía Fernández',
    role: 'teacher',
    email: 'lucia.fernandez@iglesia-emanuel.com',
    organization: 'Iglesia Emanuel',
    permissions: ['classes', 'students', 'content']
  },

  // PADRES/PARENTS
  {
    id: 'parent-001',
    username: 'padre.juan',
    password: 'juan123',
    name: 'Juan Carlos Mendoza',
    role: 'parent',
    email: 'juan.mendoza@gmail.com',
    organization: 'Iglesia Central',
    permissions: ['view_child_progress', 'materials']
  },
  {
    id: 'parent-002',
    username: 'parent',
    password: 'parent123', 
    name: 'Carmen López',
    role: 'parent',
    email: 'carmen.lopez@hotmail.com',
    organization: 'Iglesia Nueva Vida',
    permissions: ['view_child_progress', 'materials']
  },
  {
    id: 'parent-003',
    username: 'mama.sofia',
    password: 'sofia789',
    name: 'Sofía Ramírez',
    role: 'parent',
    email: 'sofia.ramirez@yahoo.com',
    organization: 'Iglesia El Redentor',
    permissions: ['view_child_progress', 'materials']
  }
];

// Función para autenticar usuario
export function authenticateUser(username: string, password: string, preferredRole?: UserRole): UserCredentials | null {
  // Buscar usuario por username y password
  const user = USERS_DATABASE.find(u => 
    u.username.toLowerCase() === username.toLowerCase() && 
    u.password === password
  );

  if (!user) {
    return null; // Credenciales incorrectas
  }

  // Si se especifica un rol preferido, verificar que coincida
  if (preferredRole && user.role !== preferredRole) {
    return null; // El usuario no tiene el rol solicitado
  }

  return user;
}

// Función para obtener usuario por ID
export function getUserById(id: string): UserCredentials | null {
  return USERS_DATABASE.find(u => u.id === id) || null;
}

// Función para obtener usuarios por rol
export function getUsersByRole(role: UserRole): UserCredentials[] {
  return USERS_DATABASE.filter(u => u.role === role);
}
