import { auth } from '@/auth';
import StartupForm from '@/components/StartupForm';
import { redirect } from 'next/navigation';

export default async function CreateStartupPage() {
  const session = await auth();
  if (!session) redirect('/');
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup Pitch</h1>
      </section>
      <StartupForm />
    </>
  );
}

// https://youtu.be/Zq5fmkH0T78?si=v2dUT-ZPshLg2JF-&t=15774
