import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Fudo from "../assets/Fudo.png";

const Footer: FC = () => {
  return (
    <div className="mt-10 px-[15vh]">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={44}>
          <Grid item xs={10}>
            <div className='flex columns-1'>
              <div>
                <Image src={Fudo} alt="Fudo" width={50} height={50} />
              </div>
              <h1>Fudo</h1> <br />
              <span>
                Our job is to filling your tummy with delicious food and with
                fast and free delivery.
              </span>
            </div>
          </Grid>
          <Grid item xs={10}>
            <>xs=8</>
          </Grid>
          <Grid item xs={8}>
            <>xs=8</>
          </Grid>
          <Grid item xs={8}>
            <>xs=8</>
          </Grid>
          <Grid item xs={8}>
            <>xs=8</>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Footer;
