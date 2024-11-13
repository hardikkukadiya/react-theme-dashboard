import React, { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductCard = ({ image, name, description, price, originalPrice, discount }) => {
  return (
    <div className="w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800  duration-300 hover:scale-105 hover:shadow-lg">
      <Zoom>
        <img 
          className="h-48 w-full object-cover object-center cursor-pointer" 
          src={image} 
          loading="lazy"
          alt={name} 
        />
      </Zoom>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{description}</p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
          <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">${originalPrice}</p>
          <p className="ml-auto text-base font-medium text-green-500">{discount}</p>
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="w-full transform overflow-hidden rounded-lg bg-gray-200 dark:bg-slate-700  h-48 animate-pulse">
    <div className="h-full flex flex-col justify-between p-4">
      <div className="h-52 bg-gray-300 rounded mb-2"></div>
      <div className="flex items-center">
        <div className="h-3 bg-gray-300 rounded w-1/3"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3 ml-2"></div>
        <div className="h-3 bg-gray-300 rounded w-3 ml-auto"></div>
      </div>
    </div>
  </div>
);

const ProductsDemo = () => {
  const [loading, setLoading] = useState(true);
  const productData = [
    { image: "/img/one.png", name: "Product 1", description: "Product description goes here.", price: "10.00", originalPrice: "25.00", discount: "2% off" },
    { image: "/img/two.png", name: "Product 2", description: "Product description goes here.", price: "20.00", originalPrice: "30.00", discount: "5% off" },
    { image: "/img/three.png", name: "Product 3", description: "Product description goes here.", price: "30.00", originalPrice: "35.00", discount: "10% off" },
    { image: "/img/four.png", name: "Product 4", description: "Product description goes here.", price: "40.00", originalPrice: "40.00", discount: "23% off" },
    { image: "/img/five.png", name: "Product 5", description: "Product description goes here.", price: "50.00", originalPrice: "45.00", discount: "15% off" },
    { image: "/img/six.png", name: "Product 6", description: "Product description goes here.", price: "60.00", originalPrice: "50.00", discount: "20% off" },
    { image: "/img/seven.png", name: "Product 7", description: "Product description goes here.", price: "70.00", originalPrice: "60.00", discount: "30% off" },
    { image: "/img/eight.png", name: "Product 8", description: "Product description goes here.", price: "80.00", originalPrice: "75.00", discount: "35% off" },
    { image: "/img/2020.png", name: "Product 9", description: "Product description goes here.", price: "90.00", originalPrice: "80.00", discount: "50% off" },
    { image: "/img/sofa.png", name: "Product 10", description: "Product description goes here.", price: "90.00", originalPrice: "80.00", discount: "50% off" },  
    { image: "/img/clothes.png", name: "Product 11", description: "Product description goes here.", price: "90.00", originalPrice: "80.00", discount: "20% off" },  
    { image: "/img/clothes2.png", name: "Product 12", description: "Product description goes here.", price: "90.00", originalPrice: "80.00", discount: "25% off" },  
    { image: "/img/shoes1.png", name: "Product 13", description: "Product description goes here.", price: "90.00", originalPrice: "80.00", discount: "30% off" },  
    { image: "/img/shoes2.png", name: "Product 14", description: "Product description goes here.", price: "90.00", originalPrice: "80.00", discount: "70% off" },  
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 
    2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {loading 
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
          : productData.map((product, index) => (
              <ProductCard 
                key={index}
                image={product.image} 
                name={product.name} 
                description={product.description} 
                price={product.price} 
                originalPrice={product.originalPrice} 
                discount={product.discount} 
            />
          ))
        }
      </div>       
    </div>
  );
};

export default ProductsDemo;
