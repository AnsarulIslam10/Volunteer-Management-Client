import { Slide } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <div className="mb-32">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 font-bold text-center mb-8 md:mb-16">
          Testimonials
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {/* card 1 */}
        <Slide triggerOnce>
          <div className="card h-[100%] bg-white sm:w-96 cursor-pointer dark:bg-[#1a242e] px-4 shadow-xl rounded-xl">
            <div className="flex justify-center pt-3">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co.com/L8My9q9/azharul.jpg"
                alt=""
              />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Azharul Islam</h2>
              <p className="text-gray-500 dark:text-gray-400">
                "As a first-time volunteer, I was nervous, but the experience
                was amazing! The impact I could make was beyond what I
                expected."
              </p>
            </div>
          </div>
        </Slide>
        {/* card 2 */}
        <div className="card bg-white dark:bg-[#1a242e] px-4 shadow-xl lg:drop-shadow-md sm:w-96 lg:w-auto lg:dark:shadow-green-50/5 cursor-pointer rounded-xl">
          <div className="flex justify-center pt-3">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src="https://i.ibb.co.com/BLVmqsq/sabbir.jpg"
              alt=""
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sabbir Hossain</h2>
            <p className="text-gray-500 dark:text-gray-400">
              "This site is a bridge between passion and purpose. I've found
              meaningful opportunities to give back and connect with others."
            </p>
          </div>
        </div>
        {/* card 3 */}
        <Slide triggerOnce direction="right">
          <div className="card h-[100%] bg-white sm:w-96 cursor-pointer dark:bg-[#1a242e] px-4 shadow-xl rounded-xl">
            <div className="flex justify-center pt-3">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co.com/4sGM8d7/istiak.jpg"
                alt=""
              />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Istiak Ahmed</h2>
              <p className="text-gray-500 dark:text-gray-400">
                "I truly appreciate how easy it is to find volunteer
                opportunities that align with my skills and interests. Highly
                recommended!"
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Testimonials;
