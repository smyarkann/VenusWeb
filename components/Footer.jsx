import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white text-center border-t border-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
          Upskill for a better future
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Request More Information
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Lift Media, LLC is a clinical stage healthcare company which is developing a unique.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition mb-8">
          Contact Us
        </button>
        <p className="text-sm text-gray-400 mb-10">© 2019 Lift Media, LLC</p>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="border-2 border-blue-600 px-2 py-1 font-bold text-blue-600 text-sm">
              LFT
            </div>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#">Team</a>
            <a href="#">Case Studies</a>
            <a href="#">Publications</a>
          </div>
          <div className="flex space-x-4">
            <a href="#"><Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
            <a href="#"><Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
            <a href="#"><Instagram className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
            <a href="#"><Youtube className="w-5 h-5 text-gray-600 hover:text-blue-600" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
