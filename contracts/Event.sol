pragma solidity ^0.5.0;
import "./ERC721Full.sol";

/** @title Event */
contract Event is ERC721Full {
    string public event_title;
    uint256 public event_start;
    uint256 private ticketId;
    string public event_website;
    string public event_description;
    string public imageHash;
    bool private canceled;
    uint256 public ticket_price;
    uint256 public number_tickets;
    address payable public organizer;

    event TicketPurchased(
        address purchaser,
        uint256 quanntity,
        uint256 date,
        address indexed indexedPurchased
    );
    event TicketTransfered(address _from, address _to, uint256 _tokenId);
    event PaymentCollected(
        address _event,
        address _organizer,
        uint256 _balance
    );
    event TicketRefended(
        address _event,
        address _requestedBy,
        uint256 _ticketId,
        uint256 _ticketPrice
    );

    constructor(
        address payable _organizer,
        string memory _event_title,
        string memory _event_website,
        string memory _event_description,
        uint256 _event_start,
        uint256 _ticket_price,
        uint256 _number_tickets
    ) public ERC721Full(_event_title, "TKT") {
        event_title = _event_title;
        event_website = _event_website;
        event_description = _event_description;
        event_start = _event_start;
        ticket_price = _ticket_price;
        number_tickets = _number_tickets;
        organizer = _organizer;
    }

    /**
    @dev allows user to purchase ticket for the event
    @param quantity total amount of ticket the user wishes to purchase maximum amount is 5
    */
    function purchaseTicket(uint256 quantity) public payable {
        require(
            number_tickets >= quantity,
            "not enough ticket quantity available!!!"
        );
        require(
            msg.value >= ticket_price.mul(quantity),
            "not enough money sent"
        );

        for (uint8 i = 0; i < quantity; i++) {
            ticketId++;
            number_tickets--;
            _mint(msg.sender, ticketId);
        }

        emit TicketPurchased(msg.sender, quantity, now, msg.sender);
    }

    /**
    @dev allows users to upload image of the event
    @param _imageHash image hash stored o IPFS
     */
    function setImage(string memory _imageHash) public {
        imageHash = _imageHash;
    }

    /**
    
    @dev allow ticket holders to transfer ownership of there ticket to other users
    @param _to address of the reciever 
    @param _tokenId id of the ticket to be transfered
    */
    function transferTicket(address _to, uint256 _tokenId) public {
        require(address(0) != _to, "invalid address provided");
        transferFrom(msg.sender, _to, _tokenId);
        emit TicketTransfered(msg.sender, _to, _tokenId);
    }

    /**
    
    @dev validated if a given ticket id is owned by the given user 
    @param _owner address of the owner of ticket to be validated
    @param _tokenId id of the ticket to be validated
    @return x boolean value holding the result 
    */
    function isTicketValid(address _owner, uint256 _tokenId)
        public
        onlyOwner
        returns (bool)
    {
        if (ownerOf(_tokenId) == _owner) {
            _burn(_tokenId);
            return true;
        } else {
            return false;
        }
    }

    /**
    
    @dev allows event organizers to cancel events they have created 
    */

    function cancelEvent() public onlyOwner {
        // require(now > startDate, "can not cancel event after it has started");
        canceled = true;
    }

    /**
  
  
  @dev returns tickets array owned by a given user
  @param _owner address of the required 
  @return x arrays of ticket id owned by user
  */
    function getOwnersTicket(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        return _tokensOfOwner(_owner);
    }

    /**
    
    @dev lets event organizer get ether collected for tickets sold for the event
     */

    function collectPayment() public onlyOwner {
        // require(now > endDate && !canceled, "can not collect payment before the event is over");
        //owner.transfer(address(this).balance);
        selfdestruct(msg.sender);
        emit PaymentCollected(address(this), msg.sender, address(this).balance);
    }

    /**
    
    @dev returns ether for each ticket the user has incase the event is canceled
    @param ticket id of the ticket to get refunds for
     */
    function getRefund(uint256 ticket) public {
        require(address(0) != msg.sender, "invalid address provided");
        require(canceled, "refund is only available for cacanceled events");
        _burn(ticket);
        msg.sender.transfer(ticket_price);
        emit TicketRefended(address(this), msg.sender, ticket, ticket_price);
    }

    /**
    
    @dev lets users check if the event is canceled or not
    @return true or false
     */

    function isCanceled() public view returns (bool) {
        return canceled;
    }

    /**
    
    @dev modifier that checked if current request is made by the event owner 
     */
    modifier onlyOwner() {
        require(
            msg.sender == organizer,
            "only event owner is allowed to perform this action"
        );
        _;
    }
}
