"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; 

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <section>
      <section
        className={`relative ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white"
            : "bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-400 text-gray-900"
        } py-20 px-6 flex flex-col items-center text-center transition-all duration-500`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="absolute top-5 right-5 px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>

        <div className="relative max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400 dark:from-blue-400 dark:to-green-300">
            Welcome to Our Platform
          </h1>
          <p className="mt-4 text-lg opacity-90 animate-fade-up delay-200">
            Discover amazing features designed to help you grow and succeed.
          </p>

          <div className="mt-6 flex space-x-4 justify-center animate-fade-up delay-300">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-transform transform hover:scale-105">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl shadow-lg bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>

          <div className="absolute -top-10 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 dark:from-blue-600 dark:to-green-600 rounded-full opacity-70 animate-bounce"></div>
          <div className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-400 dark:from-yellow-600 dark:to-red-600 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-400 dark:from-pink-600 dark:to-purple-600 rounded-full opacity-70 animate-spin-slow"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 animate-fade-up delay-500">
            <div className="p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-indigo-600 dark:text-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold">Feature One</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                Experience high performance with our optimized solutions.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-indigo-600 dark:text-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold">Feature Two</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                Seamless integrations to enhance your workflow efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-20 px-6 flex flex-row items-center text-center transition-all duration-500">
        <div className="relative max-w-5xl mx-auto space-y-6">
          <h2 className="text-4xl font-extrabold animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-blue-400 dark:to-green-400">
            Explore Our Amazing Features
          </h2>
          <p className="text-lg opacity-80 animate-fade-up delay-200">
            Unlock powerful tools designed to enhance your experience.
          </p>

          <Carousel>
            <CarouselContent>
              
              <CarouselItem>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 dark:from-teal-500 dark:to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🔒
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Secure & Reliable</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    We prioritize security and reliability to keep your data safe.
                  </p>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 dark:from-teal-500 dark:to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🔒
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Secure & Reliable</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    We prioritize security and reliability to keep your data safe.
                  </p>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-600 dark:to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Customizable UI</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Easily tailor the interface to match your needs.
                  </p>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-600 dark:to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🌐
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Global Reach</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Connect with users around the world effortlessly.
                  </p>
                </div>
              </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </section>
  );
}


