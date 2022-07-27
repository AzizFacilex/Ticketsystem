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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IERC721ReceiverInterface extends utils.Interface {
  contractName: "IERC721Receiver";
  functions: {
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC721Receiver extends BaseContract {
  contractName: "IERC721Receiver";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC721ReceiverInterface;

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
    /**
     * The ERC721 smart contract calls this function on the recipient after a `safeTransfer`. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.
     * Handle the receipt of an NFT
     * @param data Additional data with no specified format
     * @param from The address which previously owned the token
     * @param operator The address which called `safeTransferFrom` function
     * @param tokenId The NFT identifier which is being transferred
     * @returns bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
     */
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * The ERC721 smart contract calls this function on the recipient after a `safeTransfer`. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.
   * Handle the receipt of an NFT
   * @param data Additional data with no specified format
   * @param from The address which previously owned the token
   * @param operator The address which called `safeTransferFrom` function
   * @param tokenId The NFT identifier which is being transferred
   * @returns bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
   */
  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * The ERC721 smart contract calls this function on the recipient after a `safeTransfer`. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.
     * Handle the receipt of an NFT
     * @param data Additional data with no specified format
     * @param from The address which previously owned the token
     * @param operator The address which called `safeTransferFrom` function
     * @param tokenId The NFT identifier which is being transferred
     * @returns bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
     */
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    /**
     * The ERC721 smart contract calls this function on the recipient after a `safeTransfer`. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.
     * Handle the receipt of an NFT
     * @param data Additional data with no specified format
     * @param from The address which previously owned the token
     * @param operator The address which called `safeTransferFrom` function
     * @param tokenId The NFT identifier which is being transferred
     * @returns bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
     */
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * The ERC721 smart contract calls this function on the recipient after a `safeTransfer`. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.
     * Handle the receipt of an NFT
     * @param data Additional data with no specified format
     * @param from The address which previously owned the token
     * @param operator The address which called `safeTransferFrom` function
     * @param tokenId The NFT identifier which is being transferred
     * @returns bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
     */
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
