"use client";
import React from 'react';

export default function Page({ params }) {
    const isDarkMode = false; // Set default mode to light

    return (
        <div className={`max-w-5xl mx-auto p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h1 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-blue-300' : 'text-blue-600'} mb-4`}>Title</h1>
            <div dangerouslySetInnerHTML={{ __html: "Your HTML content here" }} className={`text-${isDarkMode ? 'gray-300' : 'gray-700'} mb-6`}></div>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                This is some additional content that provides more context and information about the topic at hand. 
                It is styled to enhance readability and engagement. Feel free to explore more and learn about the subject.
            </p>
            <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                <li>Point one: Important detail about the topic.</li>
                <li>Point two: Another significant aspect to consider.</li>
                <li>Point three: A final note that wraps up the discussion.</li>
            </ul>
            <button className={`mt-4 px-4 py-2 ${isDarkMode ? 'bg-yellow-500' : 'bg-blue-500'} text-white rounded hover:bg-blue-600 transition duration-200`}>
                Learn More
            </button>
        </div>
    )
}