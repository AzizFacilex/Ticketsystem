/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface EventFactoryInterface extends utils.Interface {
  contractName: "EventFactory";
  functions: {
    "deployedEvents(uint256)": FunctionFragment;
    "createEvent(string,string,string,uint256,uint256,uint256)": FunctionFragment;
    "getDeployedEvents()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployedEvents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createEvent",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedEvents",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "deployedEvents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedEvents",
    data: BytesLike
  ): Result;

  events: {
    "eventCreated(address,string,string,string,uint256,uint256,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "eventCreated"): EventFragment;
}

export type eventCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber, string],
  {
    _address: string;
    event_title: string;
    event_website: string;
    event_description: string;
    event_start: BigNumber;
    ticket_price: BigNumber;
    number_tickets: BigNumber;
    _filterName: string;
  }
>;

export type eventCreatedEventFilter = TypedEventFilter<eventCreatedEvent>;

export interface EventFactory extends BaseContract {
  contractName: "EventFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deployedEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createEvent(
      event_title: string,
      event_website: string,
      event_description: string,
      event_start: BigNumberish,
      ticket_price: BigNumberish,
      number_tickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * returns list of event addresses
     * @returns deployedEvents array of event address
     */
    getDeployedEvents(overrides?: CallOverrides): Promise<[string[]]>;
  };

  deployedEvents(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  createEvent(
    event_title: string,
    event_website: string,
    event_description: string,
    event_start: BigNumberish,
    ticket_price: BigNumberish,
    number_tickets: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * returns list of event addresses
   * @returns deployedEvents array of event address
   */
  getDeployedEvents(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    deployedEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createEvent(
      event_title: string,
      event_website: string,
      event_description: string,
      event_start: BigNumberish,
      ticket_price: BigNumberish,
      number_tickets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * returns list of event addresses
     * @returns deployedEvents array of event address
     */
    getDeployedEvents(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "eventCreated(address,string,string,string,uint256,uint256,uint256,string)"(
      _address?: null,
      event_title?: null,
      event_website?: null,
      event_description?: null,
      event_start?: null,
      ticket_price?: null,
      number_tickets?: null,
      _filterName?: string | null
    ): eventCreatedEventFilter;
    eventCreated(
      _address?: null,
      event_title?: null,
      event_website?: null,
      event_description?: null,
      event_start?: null,
      ticket_price?: null,
      number_tickets?: null,
      _filterName?: string | null
    ): eventCreatedEventFilter;
  };

  estimateGas: {
    deployedEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createEvent(
      event_title: string,
      event_website: string,
      event_description: string,
      event_start: BigNumberish,
      ticket_price: BigNumberish,
      number_tickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * returns list of event addresses
     * @returns deployedEvents array of event address
     */
    getDeployedEvents(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deployedEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createEvent(
      event_title: string,
      event_website: string,
      event_description: string,
      event_start: BigNumberish,
      ticket_price: BigNumberish,
      number_tickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * returns list of event addresses
     * @returns deployedEvents array of event address
     */
    getDeployedEvents(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
