import React from 'react';
import Teamdata from '../Data/Teamdata';
import { FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6';

const TeamCard = ({ name, description, role, image, social }) => {
  return (
    <div className="w-full md:w-1/3">
      <div className="mt-0 ml-0 mr-0">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-auto object-cover" />
          <div className="absolute bottom-4 right-4 flex space-x-2 bg-black bg-opacity-80 p-2 rounded text-white text-base">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaInstagram />
              </a>
            )}
            {social.x && (
              <a href={social.x} target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaXTwitter />
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
            )}
          </div>
        </div>
        <div className="bg-[#f8f8f8] p-6">
          <p className="italic text-gray-600 mb-2">({role})</p>
          <h2 className="text-2xl font-extrabold leading-tight uppercase">{name}</h2>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
