const Testimonials = () => {
  return (
    <div className="mb-24">
      <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 justify-items-center">
        {/* card 1 */}
        <div className="card bg-white sm:w-96 lg:w-auto relative lg:left-32 lg:hover:left-0 transition-all duration-500 cursor-pointer dark:bg-[#1a242e] px-4 shadow-xl rounded-xl">
          <div className="flex justify-center pt-3">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src="https://i.ibb.co.com/VqNK2Yf/azharul-min.jpg"
              alt=""
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Azharul Islam</h2>
            <p className="text-gray-500 dark:text-gray-400">
              "As a first-time volunteer, I was nervous, but the experience was
              amazing! The impact I could make was beyond what I expected."
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card bg-white z-10 lg:scale-110 dark:bg-[#1a242e] px-4 shadow-xl lg:drop-shadow-md sm:w-96 lg:w-auto lg:dark:shadow-green-50/5 cursor-pointer rounded-xl">
          <div className="flex justify-center pt-3">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src="https://i.ibb.co.com/bdZzzhZ/sabbir-min.jpg"
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
        <div className="card bg-white sm:w-96 lg:w-auto lg:right-32 lg:hover:right-0 transition-all duration-500 cursor-pointer dark:bg-[#1a242e] px-4 shadow-xl rounded-xl">
          <div className="flex justify-center pt-3">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src="https://i.ibb.co.com/F7VTqCL/istiak-min.jpg"
              alt=""
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Istiak Ahmed</h2>
            <p className="text-gray-500 dark:text-gray-400">
              "I truly appreciate how easy it is to find volunteer opportunities
              that align with my skills and interests. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
