"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Logo from "../assets/Fudo.png";
import { Typography } from "@mui/material";
import styles from "@/app/styles/header.module.scss";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { LuLogIn } from "react-icons/lu";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex cursor-pointer items-center gap-3 text-2xl">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <Typography component="span" className="font-bold">
          Fudo
        </Typography>
      </div>

      <ul className={styles.ul}>
        <li style={{ color: "#F3474D" }}>Why Fudo?</li>
        <li>Services </li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className="flex justify-center gap-5 items-center cursor-pointer">
        <IconButton
          color="secondary"
          onClick={handleOpen}
          aria-label="add an alarm"
        >
          <BsSearch size={18} />
        </IconButton>
        <div className="relative">
          <IconButton color="secondary" aria-label="add an alarm">
            <AiOutlineShopping size={25} />
          </IconButton>
          <div className="absolute right-0 left-5 w-[15px] h-[15px] top-[2px]  text-white rounded-full">
            <span className="flex bg-red-500 text-[11px] rounded-full justify-center items-center">
              0
            </span>
          </div>
        </div>
        <div className="bg-[#F3474D] hover:bg-[#df3238] transition-all font-normal px-6 py-3 rounded-full flex justify-center items-center gap-2">
          <LuLogIn color="white" />
          <button className="text-[12px] text-white">Login</button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Search Pizza" id="fullWidth" />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default Header;
