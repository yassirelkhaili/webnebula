import React, { useEffect, useRef } from 'react';

interface OutsideClickHandlerProps {
  children : React.ReactNode;
  onOutsideClick: () => void;
  ishidden : boolean;
}

const OutsideClickHandler = ({ children , onOutsideClick, ishidden} : OutsideClickHandlerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node) && ishidden === false) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
  
};

export default OutsideClickHandler;
