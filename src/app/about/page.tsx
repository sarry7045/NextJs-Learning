import React from "react";
import Link from "next/link";

const metadata = {
  title: "About Page",
};

const about = () => {
  return (
    <div>
      about
      <button>
        <Link href="/contact">Contact</Link>
      </button>
      <button>
        <Link href="/profile">Profile</Link>
      </button>
    </div>
  );
};

export default about;
