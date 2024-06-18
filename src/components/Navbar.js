import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Navbar extends Component {
  

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
                <div className="flex space-x-6">
                  <Link
                    to="/general"
                    className="rounded-md  px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  
                  <Link
                    to="/business"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Business
                  </Link>
                  <Link
                    to="/entertainment"
                    className ="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Entertainment
                  </Link>
                  <Link
                    to="/general"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    General
                  </Link>
                  <Link
                    to="/health"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Health
                  </Link>
                  <Link
                    to="/science"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Science
                  </Link>
                  <Link
                    to="/sports"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Sports
                  </Link>
                  <Link
                    to="/technology"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Technology
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
              </button>
            </div>
          </div>
        </div>

        
      </nav>
    );
  }
}

export default Navbar;
