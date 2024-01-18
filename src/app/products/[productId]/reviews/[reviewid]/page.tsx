import React from "react";
import { notFound } from "next/navigation";

const page = ({
  params,
}: {
  params: { productId: string; reviewid: string };
}) => {
  if (parseInt(params.reviewid) > 100) {
    notFound();
  }
  return (
    <div>
      Reviews Page: Product - {params.productId} Review - {params.reviewid}
    </div>
  );
};

export default page;
