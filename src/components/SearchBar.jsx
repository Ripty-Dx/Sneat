import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbBrightnessUp } from "react-icons/tb";

import { PiCommandLight } from "react-icons/pi";

const SearchBar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center bg-white p-2 px-5 shadow-sm rounded-3">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <IoSearchSharp className="text-dark" />
              <p className="text-lightGray p-0 m-0"> Search</p>
              <button type="button" class="btn text-lightGray bg-white p-0 d-flex justify-content-center align-items-center">
                <PiCommandLight className="text-lightGray" />
                <p className="text-lightGray p-0 m-0"> K</p>
              </button>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <FaGithub className="text-gray" />
              <IoIosNotificationsOutline className="text-gray" />

              <TbBrightnessUp className="text-gray" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
