import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to login page with default locale
  redirect('/login');
}
