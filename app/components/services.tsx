import Image from "next/image";
import React from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[4rem]">
      <div className="flex flex-col items-center">
        <span className="text-red-500 font-bold">WHAT WE SERVE</span>
        <span className="text-5xl mt-3 font-bold text-black">
          Your Favourite Food
        </span>
        <span className="text-5xl mt-3 font-bold text-black">
          Delivery Partner
        </span>
      </div>

      <div className="flex justify-center items-center gap-[7rem] flex-wrap mt-[4rem]">
        <figure className="flex justify-center items-center flex-col">
          <Image width={150} height={100} objectFit="cover" src={s1} alt="" />
          <figcaption
            className="flex flex-col items-center stateList"
            style={{ marginTop: "1rem" }}
          >
            <b className="text-2xl">Easy to Order</b> <br />
            <span className="text-center" style={{ marginTop: "-1.5rem" }}>
              You only need a few steps in <br />
              ordering food.{" "}
            </span>
          </figcaption>
        </figure>
        <figure className="flex justify-center items-center flex-col">
          <Image width={150} height={100} objectFit="cover" src={s2} alt="" />
          <figcaption
            className="flex flex-col items-center stateList"
            style={{ marginTop: "1rem" }}
          >
            <b className="text-2xl">Fasters Delivery</b> <br />
            <span className="text-center" style={{ marginTop: "-1.5rem" }}>
              You only need a few steps in <br />
              ordering food.{" "}
            </span>
          </figcaption>
        </figure>
        <figure className="flex justify-center items-center flex-col">
          <Image width={150} height={100} objectFit="cover" src={s3} alt="" />
          <figcaption
            className="flex flex-col items-center stateList"
            style={{ marginTop: "1rem" }}
          >
            <b className="text-2xl">Besr Quality</b> <br />
            <span className="text-center" style={{ marginTop: "-1.5rem" }}>
              You only need a few steps in <br />
              ordering food.{" "}
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Services;
