import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello there, I am Thiago Bernardi, a Full Stack developer from São Paulo
        Brazil. I've been working with web development, specially frontend
        development since 2001. I've started with simple HTML and CSS then moved
        to ASP 1.0 and then to PHP. I've also programmed on Python doing backend
        and automation tasks mostly for the web hosting industry. I also have
        experience with Django and Flask (Python frameworks) but my passion is
        for JavaScript and this is where i thrive and concentrate the latest
        years of my web development career. I've been programming on NodeJS for
        Rest APIs using Express, NestJS or sometimes frameworks like Strapi or
        Sanity. On the frontend I've been using React and its frameworks such as
        Gatsby and NextJS. I have extensive knowledge on CSS and follow the best
        coding practices such as clean code and Test Driven Development (Jest
        and React Testing Library). In my current role as a Lead Full Stack
        engineer I've been working with all sorts of projects involving Web3,
        getting JavaScript (NodeJS) integrated with blockchains dapps by using
        libraries such as Moralis and Alchemy. Lately I've been working as a
        Full Stack engineer in a London based web3 venture builder company and
        have been helping them build several projects that innovated the Web3
        scene.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
