import { FaTwitter, FaFacebookF, FaDribbble, FaHome, FaStore, FaBlog, FaEnvelope, FaProjectDiagram, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 px-6 py-8 border-r">
      <div className="text-center mb-8">
        <img
          src="/avatar.png" // Replace with your own avatar path
          alt="Profile"
          className="w-16 h-16 mx-auto rounded-full object-cover"
        />
        <h2 className="mt-4 font-bold text-lg">Binayak Bhandari</h2>
        <p className="text-sm text-gray-600">Frontend Developer</p>
      </div>

      <nav className="space-y-4 text-gray-700">
        <a href="#" className="flex items-center gap-2 font-medium text-black">
          <FaHome /> Homepage
        </a>
        <a href="#" className="flex items-center gap-2">
          <FaProjectDiagram /> Projects
        </a>
        <a href="#" className="flex items-center gap-2">
          <FaStore /> Store
        </a>
        <a href="#" className="flex items-center gap-2">
          <FaUser /> About
        </a>
        <a href="#" className="flex items-center gap-2">
          <FaBlog /> Blog
        </a>
        <a href="#" className="flex items-center gap-2">
          <FaEnvelope /> Contact
        </a>
      </nav>

      <div className="mt-10 text-gray-600">
        <p className="uppercase text-xs mb-2">Social</p>
        <div className="flex gap-4 text-xl">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaDribbble /></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
