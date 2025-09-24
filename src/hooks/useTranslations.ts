import { useTranslations as useNextIntlTranslations } from 'next-intl';

export function useTranslations(namespace?: string) {
  return useNextIntlTranslations(namespace);
}

// Hook específico para textos comunes
export function useCommonTranslations() {
  return useNextIntlTranslations('common');
}

// Hook específico para autenticación
export function useAuthTranslations() {
  return useNextIntlTranslations('auth');
}

// Hook específico para dashboard
export function useDashboardTranslations() {
  return useNextIntlTranslations('dashboard');
}

// Hook específico para navegación
export function useNavigationTranslations() {
  return useNextIntlTranslations('navigation');
}

// Hook específico para errores
export function useErrorTranslations() {
  return useNextIntlTranslations('errors');
}

