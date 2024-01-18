import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  if (params?.slug?.length === 2) {
    return (
      <h2>
        {" "}
        {params?.slug[0]} and {params?.slug[1]}
      </h2>
    );
  } else if (params?.slug?.length === 1) {
    return <h2>Second Condition</h2>;
  }
  return <div>Slug Home Page</div>;
};

export default page;
