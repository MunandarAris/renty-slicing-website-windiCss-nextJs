import { useState } from "react";

// plugins
import { motion } from "framer-motion";

// constant
const dataFaq = [
  {
    question: "How can I build equity into my house?",
    answer:
      "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
  },
  {
    question: "How big is an acre?",
    answer:
      "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
  },
  {
    question: "What are closing costs?",
    answer:
      "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
  },
  {
    question: "What is Title Insurance?",
    answer:
      "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
  },
];

export default function FAQ() {
  // initial state
  const [showFaq, setShowFaq] = useState(0);

  // === handle show hide faq ===
  const handleShowHideFaq = (index) => {
    setShowFaq(index);
  };

  return (
    <>
      <div className="px-5 mt-18 sm:mt-25">
        <div className="text-left sm:text-center">
          <h1 className="text-white font-bold text-3xl sm:text-5xl">
            FAQ’s – Frequently Asked Questions
          </h1>
          <p className="text-sm font-light text-zinc-300 w-full sm:w-9/12 mx-auto mt-5">
            As you might imagine, real estate agents field quite a few questions
            every day. People are naturally curious, and it’s an agent’s job to
            guide.
          </p>
        </div>

        <div className="mt-10 sm:mt-15">
          {dataFaq.map((item, index) => (
            <div
              className={`border-2 border-green ${
                showFaq == index ? "bg-green" : "bg-transparent"
              } rounded-xl p-5 sm:p-8 cursor-pointer hover:bg-green mt-7 select-none`}
              onClick={() => handleShowHideFaq(index)}
              key={index}
            >
              <div className="flex sm:items-center justify-between gap-5">
                <h1 className="text-white font-bold text-md sm:text-xl">
                  {item.question}
                </h1>

                {showFaq == index ? (
                  <motion.i
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    className="bx bx-x text-white font-bold text-xl"
                  ></motion.i>
                ) : (
                  <motion.i className="bx bx-plus text-white font-bold text-xl"></motion.i>
                )}
              </div>

              <div className={`${showFaq == index ? "block" : "hidden"}`}>
                <p className="text-zinc-300 font-light text-xs sm:text-sm mt-3">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
