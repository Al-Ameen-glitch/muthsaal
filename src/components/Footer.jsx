import React from "react";
import { Mail, Phone } from "lucide-react";

export default function MuthsaalFooter() {
  return (
    <footer className="text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-lg font-bold mb-3">
            Muthsaal Investment Nigeria limited
          </h2>
          <p className="text-sm">
            Digitising Financial Access for market traders through trust and
            technology.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#getting-started" className="hover:text-white">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#tutorials" className="hover:text-white">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#api" className="hover:text-white">
                API Reference
              </a>
            </li>
            <li>
              <a href="#community-forums" className="hover:text-white">
                Community Forums
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#devices" className="hover:text-white">
                Supported Devices
              </a>
            </li>
            <li>
              <a href="#requirements" className="hover:text-white">
                System Requirements
              </a>
            </li>
            <li>
              <a href="#downloads" className="hover:text-white">
                Downloads
              </a>
            </li>
            <li>
              <a href="#releases" className="hover:text-white">
                Release Notes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#events" className="hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a href="#meetups" className="hover:text-white">
                Meetups
              </a>
            </li>
            <li>
              <a href="#conferences" className="hover:text-white">
                Conferences
              </a>
            </li>
            <li>
              <a href="#hackathons" className="hover:text-white">
                Hackathons
              </a>
            </li>
            <li>
              <a href="#jobs" className="hover:text-white">
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <section id="contact"></section>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-3 md:mb-0">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>08100403849</span>
          </div>

          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>Muthsaalinvestment@gmail.com</span>
          </div>
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()} Muthsaal Nig. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
