import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StoreInfo from '@/components/StoreInfo';
import Products from '@/components/Products';
import DeliveryStrip from '@/components/DeliveryStrip';
import Reviews from '@/components/Reviews';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StoreInfo />
      <Products />
      <DeliveryStrip />
      <Reviews />
      <CtaBanner />
      <Footer />
      <StickyCallButton />
    </>
  );
}
