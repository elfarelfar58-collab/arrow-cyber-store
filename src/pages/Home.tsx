import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // هنجيب البيانات من الـ Django API اللي شغال على بورت 8000
    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Cybersecurity Hardware Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <p className="text-gray-400 text-center">لا توجد منتجات حالياً.. ضيف منتجات من لوحة التحكم يا هندسة.</p>
      )}
    </div>
  );
};

export default Home;