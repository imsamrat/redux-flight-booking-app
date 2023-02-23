import React from "react";
import lwsLogo from "../images/lws-logo.svg";
import frame from "../images/icons/Frame.svg"
import vectorOne from "../images/icons/Vector (1).svg"
import vectorThree from "../images/icons/Vector (3).svg"


const home = () => {
  return (
    <>
      <header id="header">
        <div class="container">
          <img src={lwsLogo} alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
          <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form class="first-hero lws-inputform">
              {/* <!-- From --> */}
              <div class="des-from">
                <p>Destination From</p>
                <div class="flex flex-row">
                  <img src={frame} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div class="des-from">
                <p>Destination To</p>
                <div class="flex flex-row">
                  <img src={frame} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div class="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  class="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                />
              </div>

              {/* <!-- Guests --> */}
              <div class="des-from">
                <p>Guests</p>
                <div class="flex flex-row">
                  <img src={vectorOne} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- Class --> */}
              <div class="des-from !border-r-0">
                <p>Class</p>
                <div class="flex flex-row">
                  <img src={vectorThree} alt="" />
                  <select
                    class="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button class="addCity" type="submit" id="lws-addCity">
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span class="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Preview Data --> */}
        <div class="table-container">
          <table class="booking-table">
            <thead class="bg-gray-100/50">
              <tr class="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th class="text-center">Journey Date</th>
                <th class="text-center">Guests</th>
                <th class="text-center">Class</th>
                <th class="text-center">Delete</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
              {/* <!-- Row 1 --> */}
              <tr class="lws-bookedTable text-black">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <p class="lws-bookedFrom">Dhaka</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="lws-bookedTo">Sylhet</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <p class="lws-bookedDate">11-01-23</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <p class="lws-bookedGustes">2</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="lws-bookedClass"> Business </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="flex justify-center gap-4">
                    <button class="lws-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* <!-- Row 2 --> */}
              <tr class="lws-bookedTable text-black">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <p class="lws-bookedFrom">Dhaka</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="lws-bookedTo">Sylhet</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <p class="lws-bookedDate">11-01-23</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <p class="lws-bookedGustes">2</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="lws-bookedClass"> Business </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="flex justify-center gap-4">
                    <button class="lws-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* <!-- Row 3 --> */}
              <tr class="lws-bookedTable text-black">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <p class="lws-bookedFrom">Dhaka</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="lws-bookedTo">Sylhet</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <p class="lws-bookedDate">11-01-23</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <p class="lws-bookedGustes">2</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="lws-bookedClass"> Business </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="flex justify-center gap-4">
                    <button class="lws-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default home;