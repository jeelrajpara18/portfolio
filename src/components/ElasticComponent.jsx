import { useRef } from "react";
import Card from "./card";

function ElasticComponent() {
  const grid2Container = useRef();
  return (
    <div className="p-6 grid-2 sm:px-10 px-5 lg:px-16 min-h-screen mt-20 md:mt-32">
      <div
        ref={grid2Container}
        className="flex items-center justify-center"
      >
        <p className="flex text-center text-xl text-gray-500">CODE IS CRAFT</p>
        <Card
          style={{ rotate: "45deg", top: "10%", left: "10%" }}
          text="GRASP"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-30deg", top: "60%", left: "45%" }}
          text="SOLID"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
          text="Design Patterns"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-45deg", top: "65%", left: "0%" }}
          text="Design Principles"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "20deg", top: "10%", left: "38%" }}
          text="SRP"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "30deg", top: "70%", left: "70%" }}
          image="assets/logos/react.svg"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-45deg", top: "70%", left: "25%" }}
          image="assets/logos/node-js.svg"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-45deg", top: "5%", left: "10%" }}
          image="assets/logos/javascript.svg"
          containerRef={grid2Container}
        />
      </div>
    </div>
  );
}

export default ElasticComponent;
