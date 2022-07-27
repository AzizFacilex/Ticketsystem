import type { EventFactory } from "../contracts/types";
import useMyContract from "./useMyContract";
import TICKETS_ABI from "../build/contracts/EventFactory.json";

export default async function useCreateEvent(...params: any) {
    const contract = useMyContract();
    const event = await contract.createEvent(params[0], params[1], params[2], params[3], params[4], params[5])
    return event;
}