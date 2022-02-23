# Signing and Smart Contracts

Smart contracts/signing is a way to authenticate a message without having to expose your private key outside the network. Basically, one end sends an authentication request to the other end. It can refuse or sign the authentication, sending the response to the sending end.

<div class="img-wrapper-md">
    <img src="/img/contract.png" />
</div>

A contract is only visible to its owners, that is, the issuer and the signer. A contract is only valid for two ends, which share the same shared key. To sign a contract, only the recipient of the contract can sign with their private key.

Read more about how it works in the API documentation.