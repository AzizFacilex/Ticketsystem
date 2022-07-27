import React from "react";
import AvailableTickets from "./AvailableTickets";
import TicketCreation from "./TicketCreation";
import { useWeb3React } from "@web3-react/core";
import type { Web3Provider } from "@ethersproject/providers";
import TICKETS_ABI from "../../build/contracts/EventFactory.json";
import useMyContract from "../../hooks/useMyContract";
import type { EventFactory } from "../../contracts/types/EventFactory";
const Tickets = () => {
  const { account } = useWeb3React<Web3Provider>();
  const contract = useMyContract();
  async function getTokenBalance(contract: EventFactory) {

    const balanceTxt = await contract.deployedEvents;
    return balanceTxt[0];
    ;
  }
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"

    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center" id="tickets">

        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Verfügbare Tickets
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Unser Platform bietet verschiedene Tickets nach Kategorien: Konzert, Theater
            oder Festivals.
          </p>
          <div className="w-full flex flex-col py-12">

            <AvailableTickets account={account} contract={contract} />
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true" >
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="ticketCreation">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Ticket Erstellung
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Erstellen Sie Tickets für Ihre Verantstaltung.
          </p>
          <div className="w-full flex flex-col py-12">
            <TicketCreation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
