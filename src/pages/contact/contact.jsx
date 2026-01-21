import { Mail, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-10 font-sans text-gray-900">
        <nav className="text-sm mb-12">
          <span className="text-gray-400">Home / </span>
          <span className="font-medium">Contact</span>
        </nav>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-sm p-8 border border-gray-50 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 p-2 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-lg">Call To Us</h3>
              </div>
              <div className="text-sm space-y-2">
                <p>We are available 24/7, 7 days a week.</p>
                <p className="font-medium">Phone: +8801611112222</p>
              </div>
            </div>

            <hr className="border-gray-300" />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 p-2 rounded-full text-white">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-lg">Write To Us</h3>
              </div>
              <div className="text-sm space-y-2">
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p className="font-medium">Emails: customer@exclusive.com</p>
                <p className="font-medium">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-sm p-8 border border-gray-50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-100 p-3 rounded outline-none border border-transparent focus:border-gray-300 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 p-3 rounded outline-none border border-transparent focus:border-gray-300 transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-gray-100 p-3 rounded outline-none border border-transparent focus:border-gray-300 transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="8"
                  className="w-full bg-gray-100 p-3 rounded outline-none border border-transparent focus:border-gray-300 transition-all resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition-all font-medium"
                >
                  Send Massage
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
