// ProfilePhotoViewer.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Avatar, Modal } from "@mui/material";
import dp from "../assets/img/dp.jpg"

const MotionAvatar = motion(Avatar);
const MotionBox = motion(Box);

export const ProfilePhotoViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail avatar */}
      <MotionAvatar
        layoutId="profile-photo"
        alt="Profile"
        src={dp}
        sx={{ width: 100, height: 100, cursor: "pointer", borderRadius:2, boxShadow:1 }}
        onClick={() => setIsOpen(true)}
      />

      {/* Backdrop and expanded photo using MUI Modal + Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <Modal
            open={isOpen}
            onClick={()=>setIsOpen(false)}
            onClose={() => setIsOpen(false)}
          >
            <MotionBox
              layoutId="profile-photo"
              onClick={() => setIsOpen(false)}
              sx={{
                position: "absolute",
                top: "20px",
                right: {
                  xs: "17px",
                  md: "11%",
                },
                maxWidth: {
                  xs:300,
                  md:350
                },
                outline: "none",
              }}
            >
              <Box
                component="img"
                src={dp}
                alt="Expanded Profile"
                sx={{ width: "100%", height: "100%", boxShadow:6 }}
              />
            </MotionBox>

          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePhotoViewer;
