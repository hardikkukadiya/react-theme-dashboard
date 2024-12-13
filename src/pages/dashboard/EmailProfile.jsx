import { Avatar } from "@material-tailwind/react";
import React from "react";

const EmailProfile = ({ email }) => {
  return (
    <div className="bg-white p-4">
      <div className="text-2xl">
        It is a long established fact that a reader will be distracted.{" "}
      </div>
      <hr className="border-blue-gray-200 my-5" />
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex gap-3 items-center">
          <Avatar
            src="/img/team-1.jpeg"
            alt="Avatar"
            size="md"
            className="border border-blue-gray-50 bg-blue-gray-50/50 object-cover"
          />
          <span className="text-sm md:text-base">{email.name}</span>
        </div>
        <div className="flex justify-center items-center text-gray-500 text-xs md:text-sm mt-2 md:mt-0">
          Sep 15, 2020, 11:04 PM (19 hours ago)
        </div>
      </div>

      <div className="mt-5 text-gray-500">{email.message}</div>
      <div className="mt-4">
        <div className="text-2xl text-blue-gray-700 font-semibold">
          Where can I get some?
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
      <hr className="border-blue-gray-200 my-5" />
      <div className="mt-4">
        <div className="text-2xl text-blue-gray-700 font-semibold">
          Where can I get some?
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
      <hr className="border-blue-gray-200 my-5" />
    </div>
  );
};

export default EmailProfile;
