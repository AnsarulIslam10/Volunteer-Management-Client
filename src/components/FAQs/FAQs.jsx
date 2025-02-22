import React from "react";
import faq from "../../assets/animations/faq.json";
import Lottie from "lottie-react";
const FAQs = () => {
  return (
    <div className="mb-24">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 font-bold text-center mb-12">
          Frequently asked questions
        </h1>
      <div className="flex items-center justify-between">
        <div>
          <Lottie className="w-52 hidden md:block lg:w-96" animationData={faq}></Lottie>
        </div>
        <div className="space-y-3 md:w-1/2">
          <div className="collapse dark:bg-[#1a242e] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How can I volunteer for a post?
            </div>
            <div className="collapse-content">
              <p>
                Browse the posts, select one that interests you, and click Be a
                Volunteer button.
              </p>
            </div>
          </div>
          <div className="collapse dark:bg-[#1a242e] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do I need prior experience to volunteer?
            </div>
            <div className="collapse-content">
              <p>No, most posts welcome volunteers of all experience levels.</p>
            </div>
          </div>
          <div className="collapse dark:bg-[#1a242e] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I create a post for volunteers?
            </div>
            <div className="collapse-content">
              <p>
                Log in, or create an account if you don't have one and go to the
                "Add volunteer need post" page then fill up your requerments and
                details and post it.
              </p>
            </div>
          </div>
          <div className="collapse dark:bg-[#1a242e] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I cancel my request or post?
            </div>
            <div className="collapse-content">
              <p>
                Yes, go to Manage my post page, select the item, and use the
                Cancel or Delete option.
              </p>
            </div>
          </div>
          <div className="collapse dark:bg-[#1a242e] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What happens if a post reaches the required number of volunteers?
            </div>
            <div className="collapse-content">
              <p>
                Once a post has enough volunteers, it will no longer accept new
                requests. You can explore other opportunities to contribute!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
