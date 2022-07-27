import React, { useState } from 'react';
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import type { EventFactory } from "../../contracts/types/EventFactory";
import useCreateEvent from "../../hooks/useCreateEvent";
import useMyContract from "../../hooks/useMyContract";

const TicketCreation = ({

}
) => {
  const [inputs, setInputs] = useState({});
  const { account } = useWeb3React<Web3Provider>();
  const contract = useMyContract();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  };
  var state = {
    event_title: null,
    event_website: null,
    event_description: null,
    event_start: null,
    ticket_price: null,
    number_tickets: null,
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("iam  submited", inputs);
    await contract.createEvent(inputs['event_title'], inputs['event_website'], inputs['event_description'], inputs['event_start'], inputs['ticket_price'], inputs['number_tickets']).then(event => console.log("Event was created!!!", event));
    // useCreateEvent(inputs).then(event => console.log("Event was created!!!", event));

  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Verantstaltung</h3>
              <p className="mt-1 text-sm text-gray-600">Tragen Sie die Informationen der Verantstaltung. Nach der Erstellung werden die Tickets direkt auf der Webseite abrufbar sein</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="event_title" className="block text-sm font-medium text-gray-700">Titel</label>
                  <input onChange={handleChange} type="text" name="event_title" id="event_title" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="event_website" className="block text-sm font-medium text-gray-700"> Offizielle Website </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                        <input onChange={handleChange} type="text" name="event_website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="event_description" className="block text-sm font-medium text-gray-700"> Beschreibung </label>
                    <div className="mt-1">
                      <textarea onChange={handleChange} id="about" name="event_description" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Kurze Beschreibung für Ihre Verantstaltung. URLs sind verlinkt</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                    <input onChange={handleChange} type="text" name="event_start"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Select a date" />
                    <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
                    <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
                      <i className="fas fa-calendar datepicker-toggle-icon"></i>
                    </button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <label htmlFor="exampleNumber022" className="form-label inline-block mb-2 text-gray-700"
                    >Ticket Price</label
                    >
                    <input
                      onChange={handleChange}
                      name="ticket_price"
                      type="number"
                      className="
                                  form-control
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                      id="exampleNumber022"
                      placeholder="Number input"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <label htmlFor="exampleNumber012" className="form-label inline-block mb-2 text-gray-700"
                    >Ticket Numbers</label
                    >
                    <input
                      type="number"
                      name="number_tickets"
                      onChange={handleChange}
                      className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                              "
                      id="exampleNumber012"
                      placeholder="Number input"
                    />
                  </div>
                </div>


                <div className="shadow overflow-hidden sm:rounded-md">
                  {/* <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                        <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" name="city" id="city" autoComplete="address-level2" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                        <input type="text" name="region" id="region" autoComplete="address-level1" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                        <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div> */}

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    {typeof account == "string" ? <button type="submit" className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none">Save</button> : <button className="border border-gray-400 bg-white text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">Connect Wallet</button>}
                  </div>
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCreation;
