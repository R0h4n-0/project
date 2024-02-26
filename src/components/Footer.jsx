import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center fixed bottom-0 w-full p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}