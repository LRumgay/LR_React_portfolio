import React from 'react'

export default function Footer() {
    return (

        <footer class="text-gray-600 body-font">
        <div
          class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <i class="fas fa-cubes fa-lg text-purple-500"></i>
              <span class="ml-3 text-xl">Links</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">If you have any question, here are a few ways to get in touch.</p>
          </div>

          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">GitHub</h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="https://github.com/LRumgay" class="text-gray-600 hover:text-gray-800">Link</a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LinkedIn</h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="https://www.linkedin.com/in/liamrumgay/" class="text-gray-600 hover:text-gray-800">Link</a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resume</h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="https://docs.google.com/document/d/1bQ5LUZ1Xd6eS_IYhwH2sozXgySg9HDjq2H_2hrtz_Ow/edit" class="text-gray-600 hover:text-gray-800">Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 Copyright:
              <a href="https://www.tailwind-elements.com/" class="text-gray-600 ml-1" target="_blank">
                Liam Rumgay</a>
            </p>
          </div>
        </div>
      </footer>
    )
}

