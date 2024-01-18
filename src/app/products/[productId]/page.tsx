import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      Dynamic Page
      <h1>{params.productId}</h1>
    </div>
  );
};

export default page;
