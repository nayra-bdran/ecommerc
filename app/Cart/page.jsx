import React from 'react'
import FeaturesSection from '../Component/FeaturesSection/FeaturesSection'
import Cart from './Cart'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import PageBanner from '../Component/PageBanner/PageBanner'

function page() {
  return (
          <div className="relative">
    <PageBanner/>
        <Cart/>
              <FeaturesSection />

    </div>
  )
}

export default page