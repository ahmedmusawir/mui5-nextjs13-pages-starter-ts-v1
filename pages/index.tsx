import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { Layout } from '@/layout';
import Home from '@/components/Home';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'], // or any other weights you want to use
  subsets: ['latin'],
});

export default function Main() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
