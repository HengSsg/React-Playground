import React, { useState, useEffect } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    // return을 하면 Unmount시점에 실행됨
    return () => {
      console.log("Unmount!");
    };
  }, []);
  return <div>UnmountTest</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsBisible] = useState(false);
  const toggle = () => setIsBisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>on/off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};
export default Lifecycle;
