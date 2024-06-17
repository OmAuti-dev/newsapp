import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
        <nav className="bg-gray-800">
        <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-center items-center ">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center text-white text-2xl">
                NewsWizz
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  <a href="/" className="rounded-md  px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
                  <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                  
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                
              </button>
      
              
            </div>
          </div>
        </div>
      
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
           
            <a href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
            <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
