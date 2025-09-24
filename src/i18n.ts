import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ locale }) => {
  // Default to Spanish
  let currentLocale = 'es';
  
  // Try to get locale from cookies first
  try {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('locale')?.value;
    
    if (cookieLocale === 'en' || cookieLocale === 'es') {
      currentLocale = cookieLocale;
    }
  } catch (error) {
    // Ignore cookie errors, use default
  }
  
  // If middleware provides a locale, use it
  if (locale === 'en' || locale === 'es') {
    currentLocale = locale;
  }

  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default
  };
});

