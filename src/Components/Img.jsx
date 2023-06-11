import React, { useEffect, useState } from 'react';

const ResponsiveImage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 640 && (
        <img src="/IMG_20151023_164855637.jpg" alt="Mobile" className="rounded-t-[20px]"/>
      )}
      {windowWidth >= 640 && (
        <img src="/IMG_20170524_161141065.jpg" alt="Desktop" className="rounded-t-[20px] mdLg:rounded-t-[30px] 2xl:w-[450px]"/>
      )}
    </div>
  );
};

export default ResponsiveImage;