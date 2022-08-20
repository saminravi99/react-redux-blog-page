import React from 'react'

const Header = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
      <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <a href="#">
          <img
            class="h-10"
            src="https://www.creativebloq.com/news/medium-new-logo-2020"
            alt="Medium"
          />
        </a>
      </div>
    </nav>
  );
}

export default Header