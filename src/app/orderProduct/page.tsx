"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderPage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing Order");
    router.push("/");
  };

  return (
    <div>
      OrderPage
      <div>
        <button onClick={handleClick}>Place Order</button>
      </div>
    </div>
  );
};

export default OrderPage;
