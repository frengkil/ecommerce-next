import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import { getProductsBySlug } from "@/sanity/helpers/queries";
import { Heart } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductsBySlug(slug);
  if (!product) {
    return notFound();
  }
  return (
    <Container className="py-10 flex flex-col md:flex-row gap-10">
      {product.images && <ImageView images={product.images} />}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div>
          <h2 className=" text-3xl md:text-4xl font-bold mb-2">
            {product.name}
          </h2>
          <PriceView
            price={product.price}
            discount={product.discount}
            className="text-lg font-bold"
          />
        </div>
        {product.stock && (
          <p className="bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg">
            In Stock
          </p>
        )}
        <p className="text-sm text-gray-600 tracking-wide">
          {product.description}
        </p>
        <div className="flex items-center gap-2.5 lg:gap-5">
          <AddToCartButton
            product={product}
            className="bg-darkColor/80 text-white hover:bg-darkColor hoverEffect"
          />
          <button className="border border-2 border-darkColor/30 text-darkColor/60 px-2.5 py-1.5 rounded-md hover:text-darkColor hover:border-darkColor hoverEffect">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
