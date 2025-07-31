import { requiredUser } from "@/hooks/requiredUser";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const OrderPage = async () => {
  const user = await currentUser();
  await requiredUser();
  return <div>OrderPage</div>;
};

export default OrderPage;
