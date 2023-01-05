import React, { ReactComponentElement, ReactElement, ReactNode } from "react";

interface HeaderInterface {
    title: string | ReactElement;
    children?: ReactNode | HTMLElement | ReactElement
}

const PageHeader = ({ title, children }: HeaderInterface) => {
  if (!children) {
    return (
      <>
        <h2 className="page-name mt-5 font-bold text-lg text-primary-black">
          <span>{title}</span>
        </h2>
      </>
    );
  } else {
    return (
      <>
        <div className="flex items-center justify-between">
          <h2 className="page-name mt-5 font-bold text-lg text-primary-black">
            <span>{title}</span>
          </h2>
          {children}
        </div>
      </>
    );
  }
};

export default PageHeader;
