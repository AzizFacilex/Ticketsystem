import type { EventFactory } from "../contracts/types";
import useContract from "./useContract";
import TICKETS_ABI from "../build/contracts/EventFactory.json";
export default function useMyContract() {
    return useContract<EventFactory>('0x0f82d5cf47F568727578cAB8AC4D06E075D550FC', TICKETS_ABI['abi']);
}