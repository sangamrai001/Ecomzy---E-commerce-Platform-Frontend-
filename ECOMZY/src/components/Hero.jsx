import React from 'react';
import heroimage from './heroimage.jpg';

const HeroSection = (props) => {
  const image1 = props.posts[0].image;
  const image2 = props.posts[6].image;
  const image3 = props.posts[12].image;

  return (
    <div className="relative w-full h-2/3 flex items-center justify-center overflow-hidden">
      <img 
        className="absolute top-0 w-full h-2/3 object-cover z-[-1]" 
        src={heroimage} 
        alt="Hero Background" 
      />
      <div className="relative mx-auto px-6 text-center md:px-12 lg:px-20">
        <h1 className="text-5xl font-bold text-white mt-8 mb-4">
          Elevate Your Shopping Experience
        </h1>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Explore Our Key Features
          </h2>
          <p className="text-gray-700 text-lg mb-12">
            Ecomzy combines a sleek product catalog, a user-friendly cart system, and a responsive design to enhance your shopping journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="w-40 h-40 flex items-center justify-center overflow-hidden mb-4">
                <img src={image1} alt="Product Catalog" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vibrant Product Catalog</h3>
              <p className="text-gray-700 text-center">
                Explore a rich variety of products with detailed descriptions and high-quality images.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="w-40 h-40 flex items-center justify-center overflow-hidden mb-4">
                <img src={image2} alt="Shopping Cart" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Shopping Cart</h3>
              <p className="text-gray-700 text-center">
                Manage your items with ease and enjoy real-time updates and smooth interactions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="w-50 h-40 flex items-center justify-center overflow-hidden mb-4">
                <img src={image3} alt="Mobile-Responsive Design" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adaptive Design</h3>
              <p className="text-gray-700 text-center">
                Enjoy a flawless shopping experience on any device with our fully responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
