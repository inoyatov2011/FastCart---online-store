import React from 'react'

const Account = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-10 font-sans text-gray-900">
      <nav className="text-sm mb-10 flex justify-between">
        <div>
          <span className="text-gray-400">Home / </span>
          <span className="font-medium">My Account</span>
        </div>
        <div>
          <span>Welcome! <span className="text-red-500">Md Rimel</span></span>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-4">Manage My Account</h3>
            <ul className="ml-8 space-y-2 text-gray-500">
              <li className="text-red-500 cursor-pointer">My Profile</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Address Book</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">My Payment Options</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">My Orders</h3>
            <ul className="ml-8 space-y-2 text-gray-500">
              <li className="hover:text-red-500 cursor-pointer transition-colors">My Returns</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">My Cancellations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 cursor-pointer">My Wishlist</h3>
          </div>
        </aside>
        <main className="flex-1 bg-white shadow-lg rounded-sm p-8 border border-gray-50">
          <h2 className="text-red-500 text-xl font-medium mb-6">Edit Your Profile</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative border bg-gray-50 rounded p-3">
                <label className="text-xs text-gray-400 absolute top-1 left-3">First Name</label>
                <input type="text" defaultValue="Md" className="w-full bg-transparent pt-3 outline-none" />
              </div>
              <div className="relative border bg-gray-50 rounded p-3">
                <label className="text-xs text-gray-400 absolute top-1 left-3">Last Name</label>
                <input type="text" defaultValue="Rimel" className="w-full bg-transparent pt-3 outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative border bg-gray-50 rounded p-3">
                <label className="text-xs text-gray-400 absolute top-1 left-3">Email</label>
                <input type="email" defaultValue="rimel1111@gmail.com" className="w-full bg-transparent pt-3 outline-none" />
              </div>
              <div className="relative border bg-gray-50 rounded p-3">
                <label className="text-xs text-gray-400 absolute top-1 left-3">Address</label>
                <input type="text" defaultValue="Kingston, 5236, United State" className="w-full bg-transparent pt-3 outline-none" />
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <h3 className="font-medium text-lg">Password Changes</h3>
              <input 
                type="password" 
                placeholder="Current Password" 
                className="w-full bg-gray-50 border rounded p-3 outline-none"
              />
              <input 
                type="password" 
                placeholder="New Password" 
                className="w-full bg-gray-50 border rounded p-3 outline-none"
              />
              <input 
                type="password" 
                placeholder="Confirm New Password" 
                className="w-full bg-gray-50 border rounded p-3 outline-none"
              />
            </div>
            <div className="flex justify-end items-center gap-8 pt-4">
              <button type="button" className="text-gray-900 hover:text-red-500 transition-colors">
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition-all font-medium"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Account
