import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
//import FaqTwo from '@/components/faq-section/FaqTwo';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Script App"
        description=" The best way to create and share your scripts"
      />
      
      
      <Header />
      <main>
        <section id="video">
          <VideoSection />
        </section>
        <section id="features">
          <FeatureSection />
        </section>
        <section id="social-proof">
          <SocialProof />
        </section>
        <section id="pricing">
          <PricingTable />
        </section>
        {/*<section id="faq">
          <FaqTwo />
        </section>*/}
        <section id="contact">
          <ListSection />
        </section>
      </main>
      <Footer />
      
    </Page>
  );
}
