import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect('/');
  }

  return redirect('/dashboard/overview');
}
