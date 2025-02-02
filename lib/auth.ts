import { getServerSession } from 'next-auth';
import { authConfig } from './auth.config';

// Function to get the session in server components
export async function getAuthSession() {
  return await getServerSession(authConfig);
}
