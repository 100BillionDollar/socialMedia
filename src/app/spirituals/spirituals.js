import Head from 'next/head';
import Script from 'next/script';

// Component Imports
import AppDownloadComponent from '../utils/appDownloadComponent';
import Dailypanchang from './dailypanchang/dailypanchang';
import Feature from './feature/feature';
import Herosection from './herosection/herosection';
import Puja from './puja/puja';
import Social from './social/social';

// State Management
import { useState } from 'react';

export default function Home() {

  return (
    <>
      {/* Head Section */}
      <Head>
        <title>Hindu Mandir Puja - A Spiritual Platform</title>
        <meta
          name="description"
          content="A Trusted Spiritual Platform for Offering Puja and Chadhavas at India's Most Famous Mandir"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

  
      {/* Hero Section */}
      <Herosection />

      {/* Featured Section */}
      <Feature />

      {/* Spiritual Information Section */}
      <Dailypanchang />

      {/* Upcoming Pujas Section */}
      <Puja />

      {/* Join Our Community Section */}
      <Social />

      {/* App Download Section */}
      <AppDownloadComponent />

      {/* External Styles and Scripts */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}