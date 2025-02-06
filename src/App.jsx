import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default function App() {
  const [questionAsked, setQuestionAsked] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noBtnText, setNoBtnText] = useState("No")
  const { width, height } = useWindowSize();

  return (
     <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
       {/* Cloud with text above the image */}
       {!accepted && (!questionAsked ? (
          <>
            <motion.div
               className="relative w-80 font-sans"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2, duration: 1 }}
            >
              <motion.div
                 className="absolute -top-60 left-56 transform -translate-x-1/2"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                {/* Cloud image */}
                <motion.img
                   src={"cloud.png"}
                   alt="Cloud"
                   className="max-w-xs"
                />
                {/* Text inside the cloud */}
                <motion.div
                   className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-center"
                   initial={{ opacity: 1 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ ease: "easeOut", duration: 1 }}
                >
                  Daddy has something important to ask you 🥰
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="w-96 h-96 flex flex-col items-center"
            >
              {/* Soft Toy Image */}
              <motion.img
                 src="chilli.png"
                 alt="Soft Toy"
                 className="w-80 h-80 bg-transparent"
              />
              <p className="text-xl font-semibold mt-4">Hello Mommy! 🐸 💕</p>

              {/* Buttons */}
              <motion.div
                 className="mt-6 space-x-4"
                 initial={{ opacity: 1 }}
                 animate={{ opacity: questionAsked ? 0 : 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.8 }}
              >
                <Button
                   color="red"
                   onClick={() => setQuestionAsked(true)}
                >
                  Ask
                </Button>
              </motion.div>
            </motion.div>
          </>
       ) : (
          <>
            <motion.div
               className="relative w-80 font-sans wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.div
                 className="absolute -top-60 left-56 transform -translate-x-1/2"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                {/* Cloud image */}
                <motion.img
                   src={"cloud.png"}
                   alt="Cloud"
                   className="max-w-xs"
                />
                {/* Text inside the cloud */}
                <motion.div
                   className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-center"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5, duration: 1 }}
                >
                  Will you be his valentine? 🥺
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="w-96 h-96 flex flex-col items-center"
            >
              {/* Soft Toy Image */}
              <motion.img
                 src="chilli.png"
                 alt="Soft Toy"
                 className="w-80 h-80 bg-transparent"
              />
              <p className="text-xl font-semibold mt-4">Hello Mommy! 🧸💕</p>

              {/* Buttons */}
              <motion.div className="mt-6 space-x-4 flex items-center justify-center">
                <Button
                   color="red"
                   onClick={() => {

                     setAccepted(true)
                   }}
                >
                  Yes
                </Button>

                  <Button
                     color="gray"
                     className={"m-3 w-fit"}
                     onMouseOver = { (e) => {
                       const wrapper = document.querySelector('.wrapper');
                       const wrapperRect = wrapper.getBoundingClientRect();
                       const noBtnRect = e.target.getBoundingClientRect();
                       const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
                       const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
                       e.target.style.left = i + 'px';
                       e.target.style.top = j + 'px';
                     }}
                     onClick={ () => {
                       setNoBtnText("Itni koshish kar rahe No karne kee? 😔")
                     }}
                  >
                    {noBtnText}
                  </Button>
              </motion.div>
            </motion.div>
          </>
       ))}
      {accepted && ( <>
         <Confetti
            width={width}
            height={height}
            tweenDuration={5000}
         />

         <div className={"text-4xl"}> See you on 14th 💐 (virtually 😭) </div>
         </>
      )}
     </div>

  );
}
