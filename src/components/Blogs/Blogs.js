import React from "react";
import { useSelector } from "react-redux";
import Hero from "../Hero/Hero";
import Blog from "./Blog";

const Blogs = () => {
  const { blogs } = useSelector((state) => state.blogs);
  const { category, author, search } = useSelector(
    (state) => state.filteredBlogs
  );

  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Hero />

        {/* <!-- card grid  --> */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* <!-- single card  --> */}
          {search || category || author
            ? blogs
                .filter((blog) => {
                  return (
                    blog.title.toLowerCase().includes(search.toLowerCase()) ||
                    blog.author === author||
                    blog.category === category 
                  );
                })
                .map((blog) => {
                  return <Blog key={blog.id} {...blog} />;
                })
            : blogs.map((blog) => {
                return <Blog key={blog.id} {...blog} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
