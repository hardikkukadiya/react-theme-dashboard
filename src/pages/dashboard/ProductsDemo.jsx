
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductCard = ({ image, name, description, specialPrice, discount, amount }) => {
  return (
    <div className="w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 duration-300       hover:scale-105 hover:shadow-lg">
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
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${specialPrice}</p> 
          <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">${amount}</p>
          <p className="ml-auto text-base font-medium text-green-500">{discount}</p>
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="w-full transform overflow-hidden rounded-lg bg-gray-200 dark:bg-slate-700 h-48 animate-pulse">
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

const ProductsDemo = ({ products, loading }) => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
          : products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.img || "/img/default-image.png"}
              name={product.name}
              description={product.description || "No description available."}
              specialPrice={product.specialPrice || "0.00"}
              amount={product.amount || "0.00"}
              discount={product.discount || ""}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsDemo;