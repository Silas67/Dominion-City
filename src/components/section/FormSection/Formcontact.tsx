import React from "react";
import GitForm from "../ContactSection/GitForm";

const Formcontact = () => {
  return (
    <div>
      <div className="w-full px-8 flex items-center justify-around gap-4 max-sm:flex-col">
        <div className="sm:w-1/2 space-y-6 p-8">
          <h1 className="text-7xl">Heading</h1>
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore
            esse eveniet nam ab tenetur explicabo incidunt quis iusto beatae.
          </p>
        </div>
        {/* form */}
        <div className="w-full md:w-1/2 p-8 mx-[16px border border-white bg-primary m-8 rounded-xl">
          <form className="space-y-4 text-[#393939]">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Phone"
              className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
              required
            />
            <GitForm Con />

            <textarea
              name="message"
              placeholder="How can we help you?"
              className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
              rows={4}
              maxLength={500}
              required
            ></textarea>

            <button className="w-full bg-primary text-white p-3 rounded-md hover:bg-white hover:text-primary transition-all duration-500">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formcontact;
