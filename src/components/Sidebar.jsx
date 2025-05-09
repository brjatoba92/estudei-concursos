import React from "react";
import { Link } from "react-router-dom";
import { 
  HomeIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  ArchiveBoxIcon, 
  AcademicCapIcon 
} from "@heroicons/react/24/solid";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={onClose}
        />
      )}
      <div className={`
        fixed top-0 left-0 w-64 h-full bg-blue-800 shadow text-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 font-bold text-xl border-b border-blue-700">
          Menu
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link 
            to="/dashboard" 
            className="flex items-center gap-2 px-4 py-3 hover:bg-blue-600 transition"
            onClick={onClose}
          >
            <HomeIcon className="w-5 h-5" />
            Início
          </Link>
          <Link to="/estudo" className="flex items-center gap-2 px-4 py-3 hover:bg-blue-600 transition">
            <BookOpenIcon className="w-5 h-5" />
            Estudo
          </Link>
          <Link to="/materias" className="flex items-center gap-2 px-4 py-3 hover:bg-blue-600 transition">
            <ClipboardDocumentListIcon className="w-5 h-5" />
            Matérias
          </Link>
          <Link to="/revisoes" className="flex items-center gap-2 px-4 py-3 hover:bg-blue-600 transition">
            <ArchiveBoxIcon className="w-5 h-5" />
            Revisões
          </Link>
          <Link to="/simulados" className="flex items-center gap-2 px-4 py-3 hover:bg-blue-600 transition">
            <AcademicCapIcon className="w-5 h-5" />
            Simulados
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
