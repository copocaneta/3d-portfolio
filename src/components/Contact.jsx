import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween, 0.2, 1")}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <div className="mt-12 flex flex-col gap-8">
          <a
            href="https://discordapp.com/users/724435328823197757/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-[#7289da]"
              size="2x"
            />
          </a>
          <a
            href="https://discordapp.com/users/724435328823197757/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-[#229ED9]"
              size="2x"
            />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween, 0.2, 1")}
        className="xl:flex-1 xl:h-auto md:h-[250px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
