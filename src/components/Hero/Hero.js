import React from 'react'

const Hero = () => {
  return (
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img
          class="h-48 w-full object-cover"
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          alt=""
        />
      </div>

      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Article
            </span>
          </p>
          <a href="#" class="block mt-1">
            <p class="text-xl font-semibold text-gray-900">
              Boost your conversion rate
            </p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/73503432?v=4"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900 hover:underline">
              Learn with sumit
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">11 Jul, 2022</time>
              <span aria-hidden="true">&middot;</span>
              <span> 6 min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero