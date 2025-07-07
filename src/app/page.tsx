"use client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="flex justify-center gap-8 py-6 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-10 shadow-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 py-16" id="hero">
        {/* <Image
          src="/next.svg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mb-6 dark:invert"
        /> */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Andrew Tobiko</h1>
        <h2 className="text-xl sm:text-2xl font-medium mb-6 text-center text-blue-600 dark:text-blue-400">Software Developer</h2>
        <p className="max-w-xl text-center text-lg mb-8">Passionate about building modern web applications and delivering delightful user experiences. Welcome to my portfolio!</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Projects</a>
          <a href="#contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition">Contact</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-2xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-lg leading-relaxed">I&apos;m Andrew Tobiko, a software developer with a passion for creating robust and scalable web applications. I enjoy working with modern technologies and am always eager to learn and take on new challenges.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-semibold mb-8">Projects</h3>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://github.com/LAETITIA-hub/study-hub" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                Study Hub
              </a>
            </h4>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              A full-stack e-learning portal for Moringa students, built with a Flask backend and React frontend. Features secure authentication, course enrollment, progress tracking, and collaborative discussions. <br/>
              <span className="font-medium">Tech:</span> Flask, React, Bootstrap, Flask-SQLAlchemy, Flask-JWT-Extended, SQLite/PostgreSQL
            </p>
            <span className="text-xs text-gray-500 mt-auto">Team project | <a href="https://study-hub-cerw.onrender.com/" target="_blank" rel="noopener noreferrer" className="underline">Live Demo</a></span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://github.com/Tobikorais/Airline-" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                Airline Reservation System
              </a>
            </h4>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              A simple airline reservation system web app. Users can view available flights, book tickets, and manage reservations. Built with HTML, CSS, and JavaScript.<br/>
              <span className="font-medium">Tech:</span> HTML, CSS, JavaScript
            </p>
            <span className="text-xs text-gray-500 mt-auto">Personal project | <a href="https://github.com/Tobikorais/Airline-" target="_blank" rel="noopener noreferrer" className="underline">Source Code</a></span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://github.com/Tobikorais/my-cli-project" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                My CLI Project
              </a>
            </h4>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              A command-line interface (CLI) project starter repository. <br/>
              <span className="font-medium">Note:</span> This repository is currently empty and can be used as a template for future CLI tools or experiments.
            </p>
            <span className="text-xs text-gray-500 mt-auto">Personal project | <a href="https://github.com/Tobikorais/my-cli-project" target="_blank" rel="noopener noreferrer" className="underline">Source Code</a></span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2">
              <a href="https://github.com/Brian454-nexus/fitme-tracker-phase2" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                FitMe Tracker
              </a>
            </h4>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              A modern, feature-rich fitness and wellness application designed to help users achieve their health goals through personalized workout plans, nutrition tracking, hydration monitoring, and motivational support. <br/>
              <span className="font-medium">Tech:</span> React.js, Styled-components, Framer Motion, Three.js, Context API, LocalStorage, API integration (API Ninjas, TheMealDB)
            </p>
            <span className="text-xs text-gray-500 mt-auto">Team project | <a href="https://fitme-tracker.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline">Live Demo</a></span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className="mb-4">
          <span className="font-medium">Phone: </span>
          <a href="tel:+254708288623" className="text-blue-600 hover:underline">+254708288623</a>
        </div>
        <a href="mailto:tobikorais7@gmail.com" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Email Me</a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Andrew Tobiko. All rights reserved.
      </footer>
    </div>
  );
}
