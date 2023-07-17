import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <section className="container py-20 text-center">
        Edit this and start working.
      </section>
    </div>
  );
}
