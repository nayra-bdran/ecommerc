import React from 'react'
import FeaturesSection from '../Component/FeaturesSection/FeaturesSection'
import PageBanner from '../Component/PageBanner/PageBanner'
import ContactUs from './ContactUs';
function page() {
  return (
    <div>
     <PageBanner tittel="Contact"/>
        <ContactUs/>
        <FeaturesSection />

    </div>
  )
}

export default page;

