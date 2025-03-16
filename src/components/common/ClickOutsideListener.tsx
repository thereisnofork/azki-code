import React, { useEffect, useRef, cloneElement, isValidElement } from "react";

type ClickOutsideListenerProps = {
  children: React.ReactElement;
  onClickOutside: () => void;
};

const ClickOutsideListener: React.FC<ClickOutsideListenerProps> = ({
  children,
  onClickOutside,
}) => {
  const childRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        childRef.current &&
        !childRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  if (isValidElement(children)) {
    return cloneElement(children, { ref: childRef } as unknown);
  }

  return <>{children}</>;
};

export default ClickOutsideListener;
