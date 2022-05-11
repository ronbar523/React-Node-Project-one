import React from "react";

const PageHeader = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="text-center m-2 "> {title}</h1>
      <h2 className="fs-3">{subTitle}</h2>
      <hr />
    </div>
  );
};

export default PageHeader;
