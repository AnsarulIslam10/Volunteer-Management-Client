import React from "react";
import faq from "../../assets/animations/faq.json";
import Lottie from "lottie-react";
const FAQs = () => {
  return (
    <div className="mb-16">
      <h1 className="text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
        Frequently asked questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div>
          <Lottie animationData={faq}></Lottie>
        </div>
        <div className="space-y-3">
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
