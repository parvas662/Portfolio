// src/components/About.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="  h-screen bg-black ">
      <div className="w-full text-white  flex justify-center gap-14 ">
        <div className="relative w-xl font-Fugaz flex flex-col items-center mt-10">
          <h2 className=" font-medium text-[128px] tracking-wide ">ABOUT</h2>
          <h2 className="absolute top-20 left-62  font-thin text-[176px] leading-none tracking-wide text-transparent"
            style={{ WebkitTextStroke: '2px #D84E2C',WebkitTextFillColor: 'transparent', }}>
              ME</h2>
        </div>   
        <div className="text-center text-[18px] w-xl bg-linear-to-tr  to-[#1fc3ff21] bg-gradient-to-tr from-black/30 text-xl/relaxed inset-shadow-sm inset-shadow-[#D84E2C] rounded-2xl font-OpenSans pt-10 py-6 px-12">
          <p className=" text-white  ">
            👋 Hi, I’m <span className="font-semibold text-[#D84E2C]">Parvas Sharma,</span> — A FrontEnd Developer. Passionate about creating smooth, responsive, and beautiful web interfaces.
             I’ve built real-world apps using <span className="font-semibold text-[#D84E2C]">React, Tailwind, and Vite. </span>
          </p>
          <p>I like <span className="font-semibold text-[#D84E2C]">solving problems,</span> learning new things, and experimenting with different technologies. When I'm not coding,
            I'm probably working on a side project or exploring something new.</p>
        </div>
      </div>
    </section>
  );
}

