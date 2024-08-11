import React, { useRef, useEffect } from 'react';
import { createApp } from 'vue';
import Footer from 'VueApp/Footer'; // Module Federation ile getirilen Vue bileşeni

const VueWrapper = () => {
  const vueContainerRef = useRef(null);

  useEffect(() => {
    if (vueContainerRef.current) {
      // Vue uygulamasını oluştur ve Vue bileşenini mount et
      createApp(Footer).mount(vueContainerRef.current);
    }
  }, []);

  return <div ref={vueContainerRef}></div>;
};

export default VueWrapper;
