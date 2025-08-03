"use client";

import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import Loading from "@/components/Loading";
import NoAccessToCart from "@/components/NoAccessToCart";
import userCartStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const page = () => {
  const [isClient, setIsClient] = useState(false);
  const { isSignedIn } = useAuth();
  const {
    deleteCartProduct,
    getSubtotalPrice,
    getItemCount,
    getGroupItems,
    getTotalPrice,
    resetCart,
  } = userCartStore();

  const user = useUser();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }
  const cartProducts = getGroupItems();
  return (
    <div>
      {isSignedIn ? (
        <Container>
          {cartProducts.length ? (
            <>
              <p>products</p>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
};

export default page;
