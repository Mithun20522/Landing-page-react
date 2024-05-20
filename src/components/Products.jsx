import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductContext from '../context/ProductContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const {setTotal} = useContext(ProductContext)

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.furrl.in/api/v2/listing/getListingProducts', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          "input": {
            "entity": "vibe",
            "filters": [],
            "id": "#HomeHunts",
            "page": page,
            "pageSize": 5
          }
        })
      });
      const data = await res.json();
      setTotal(data.data.getListingProducts.totalProducts)
      setProducts(prevProducts => [...prevProducts, ...data.data.getListingProducts.products]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        if (!loading) {
          getProducts();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]); 
  
  return (
    <div className="justify-center mt-5 flex gap-2 flex-wrap scroll-smooth">
      {products.map((product, idx) => (
        <ProductCard key={`${product.id}${idx}+1`} product={product} />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Products;
