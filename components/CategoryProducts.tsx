"use client";
import { CATEGORIES_QUERYResult, Product } from "@/sanity.types";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Item } from "@radix-ui/react-accordion";
import {motion} from 'motion/react';
import { client } from "@/sanity/lib/client";
import ProductGrid from "./ProductGrid";
import { Loader2 } from "lucide-react";
import { AnimatePresence } from "motion/react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

interface Props {
  categories: CATEGORIES_QUERYResult;
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = React.useState(slug);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setLoading(true);

      const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);
  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      <div className="flex flex-col md:min-w-40 border">
        {categories.map((category) => (
          <Button
            key={category._id}
            onClick={() => setCurrentSlug(category.slug?.current as string)}
            className={`bg-transparent border-0 rounded-none text-darkColor shadow-none hover:bg-darkColor/80 border-b last:border-0 ${category.slug?.current === currentSlug && "bg-darkColor text-white border-darkColor"} hover:text-white font-semibold hoverEffect`}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div className="flex-1 ">
        {loading ? (
          <div className="flex flex-col items-center justify-center pt-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
            <div className="flex items-center space-x-2 text-blue-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-lg font-semibold">
                Product is Loading...
              </span>
            </div>
          </div>
        ) : (
          <>
            {products.length ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                {products?.map((product: Product) => (
                  <AnimatePresence key={product._id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            ) : (
              <NoProductAvailable selectedTab={currentSlug} className="" />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
