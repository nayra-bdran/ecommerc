"use client"
import React, { useState } from 'react';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Get In Touch With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For more information about our products & services, please feel free to drop us an email.
          Our staff is always here to help you out. Don&apos;t hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Information */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start">
            <span className="text-2xl text-gray-700 mr-4">📍</span>
            <div>
              <h3 className="font-semibold text-lg text-gray-700">Address</h3>
              <p className="text-gray-600">295 Fifth Avenue, New York, NY 10018, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <span className="text-2xl text-gray-700 mr-4">📞</span>
            <div>
              <h3 className="font-semibold text-lg text-gray-700">Phone</h3>
              <p className="text-gray-600">Mobile: (+04) 456-4789</p>
              <p className="text-gray-600">Hotline: (+04) 456-4789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start">
            <span className="text-2xl text-gray-700 mr-4">🕒</span>
            <div>
              <h3 className="font-semibold text-lg text-gray-700">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 20:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 17:00</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Your name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email address</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Email address"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="This is optional"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>

          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
