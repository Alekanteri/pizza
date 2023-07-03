"use client"
import Image from "next/image";
import React from "react";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/heroIcon.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiPhoneCall } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import person from "../assets/person.png";
import pizza from '../assets/favicon.ico'

const Hero: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number | null>(2);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex mt-[10vh] justify-between">
      <div>
        <div className="flex items-center bg-red-100 rounded-full w-max p-3 px-5 gap-2">
          <span className="text-red-500">More that Faster</span>
          <Image src={Cherry} width={40} height={25} alt="Cherry" />
        </div>

        <div className="flex flex-col mt-5 font-bold text-6xl">
          <span style={{ paddingTop: "10px" }}>Be The Fastesr</span>
          <span style={{ paddingTop: "10px" }}>In Delivering</span>
          <span style={{ paddingTop: "10px" }}>
            Your <span className="text-red-500">Food</span>
          </span>
        </div>

        <div className="w-[40vh] py-4 text-gray-600">
          <span>
            Out job to filing your tummy with delicious food and with fast and
            free delivery
          </span>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Button className="btn capitalize">Get Started</Button>
            <Button className="rounded-full capitalize" onClick={handleOpen}>
              <span className="p-3 flex shadow-lg rounded-full">
                <FaPlay className="text-orange-300" />
              </span>{" "}
              <p className="px-3 text-gray-700">Watch Video</p>
            </Button>
          </div>

          <div className="flex mt-9">
            <AvatarGroup max={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <figure className="flex px-4 flex-col ">
                <figcaption className="font-bold">Our Happy Customer</figcaption>
                <div className="flex justify-center items-center gap-2  ">
                <img
                  width={15}
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt="rating"
                />
                <span>4,8 <span className="text-xs ">(12.5k Review)</span></span>
                </div>
              </figure>
            </AvatarGroup>
          </div>
        </div>
        <Modal
          className="flex justify-center items-center"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="bg-black rounded-lg w-max h-max">
            <Typography
              className="flex justify-center mt-5 font-effect-fire-animation"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Be The Fastesr In Delivering Your Food
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <iframe
                width="760"
                height="515"
                src="https://www.youtube.com/embed/SaadWnnr8N0"
                title="YouTube video player"
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Typography>
          </Box>
        </Modal>
      </div>

      <div className="mt-[-10vh] mr-[8rem]">
        <div className="relative">
          <Image
            width={600}
            height={600}
            src={HeroImage}
            objectFit="cover"
            layout="intrinsic"
            alt="HeroImage"
          />
          <div className="flex gap-3 duration-150 transition hover:scale-110 bg-white shadow-lg p-[0.9rem] rounded-lg absolute left-[25rem] bottom-[2rem] w-max ">
            <div className="w-[6rem] h-[4rem] rounded-lg">
              <Image
                className="rounded-lg"
                src={pizza}
                width={120}
                height={100}
                alt="p1"
              />
            </div>

            <div className="flex justify-center flex-col h-[4rem] font-bold">
              <span>Italian Pizza</span>
              <Rating
                className="ml-[-5px]"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <span>
                <span className="text-red-500">$</span> 7.49
              </span>
            </div>
          </div>
          <div className="flex gap-3 duration-150 rounded-full transition hover:scale-110 bg-white shadow-lg p-[0.5rem] absolute left-[10rem] top-[32rem] w-max ">
            <div className="flex justify-between gap-[2rem]">
              <div>
                <Image
                  className="rounded-lg"
                  src={person}
                  width={50}
                  height={50}
                  alt="person"
                />
              </div>
              <div className="font-bold">
                Richard Watson <br />{" "}
                <span className="font-[300] text-gray-700 text-xs">
                  Food Courier
                </span>
              </div>
              <div className="bg-red-500 p-4 rounded-full ">
                <BiPhoneCall size={22} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
