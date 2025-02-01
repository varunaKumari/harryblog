"use client";

import React from "react";

const blogs = [
  {
    title: "Exploring the Beauty of Web Development",
    description: "A deep dive into the fundamentals of web development and why it's important.",
    slug: "exploring-web-development",
    date: "2025-01-31",
    author: "John Doe",
    image: "https://via.placeholder.com/400x300?text=Web+Development",
  },
  {
    title: "How to Build Scalable Applications",
    description: "Learn the techniques and strategies for building applications that can scale seamlessly.",
    slug: "scalable-applications",
    date: "2025-01-25",
    author: "Jane Smith",
    image: "https://via.placeholder.com/400x300?text=Scalable+Applications",
  },
  {
    title: "CSS Grid: A Game Changer for Layouts",
    description: "Master the powerful CSS Grid layout system to build modern, responsive websites.",
    slug: "css-grid-layouts",
    date: "2025-01-15",
    author: "Alice Brown",
    image: "https://via.placeholder.com/400x300?text=CSS+Grid",
  },
  {
    title: "JavaScript Best Practices",
    description: "Improve your JavaScript coding skills with these best practices and patterns.",
    slug: "javascript-best-practices",
    date: "2025-02-01",
    author: "Mark Lee",
    image: "https://via.placeholder.com/400x300?text=JavaScript+Best+Practices",
  },
  {
    title: "React Hooks: The Ultimate Guide",
    description: "Understand and master React Hooks to write clean and efficient code.",
    slug: "react-hooks-guide",
    date: "2025-01-20",
    author: "Emily Davis",
    image: "https://via.placeholder.com/400x300?text=React+Hooks",
  },
  {
    title: "Tailwind CSS Tips & Tricks",
    description: "Enhance your Tailwind CSS skills with these expert tips and techniques.",
    slug: "tailwind-css-tips",
    date: "2025-01-10",
    author: "David White",
    image: "https://via.placeholder.com/400x300?text=Tailwind+CSS",
  },
];

export default function BlogPage() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          Latest Blogs
        </h1>

        {/* Blog cards container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`shadow-lg rounded-2xl overflow-hidden bg-white dark:bg-gray-800 transform hover:shadow-2xl transition-shadow duration-300 hover:scale-105 ${index % 2 === 0 ? 'h-80' : 'h-96'}`}
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-1/2 object-cover"
              />

              <div className="p-6 flex flex-col justify-between h-1/2">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-500 transition-colors duration-300">
                  <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                </h2>
                
                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mt-2">{blog.description}</p>
                
                {/* Author and Date */}
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>By {blog.author}</span> • <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                
                {/* Read more button */}
                <a
                  href={`/blog/${blog.slug}`}
                  className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-indigo-700 transition-colors duration-300"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




