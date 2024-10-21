import React from 'react'
import ContactUs from './Contactus'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import FeaturesSection from '../Component/FeaturesSection/FeaturesSection'
import PageBanner from '../Component/PageBanner/PageBanner'

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
echo "# Furnirro" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nayra-bdran/Furnirro.git
git push -u origin main