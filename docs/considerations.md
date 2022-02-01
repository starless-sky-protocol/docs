## Storage

Starless Sky Networks encrypts contents in it's storage, such as identity info or contracts, however it can be decrypted using public keys. To avoid catastrophes in network intrusions, none of the key pairs are stored on the server without encryption.

Private keys are never stored on the network in any way. Public keys and SkyIDs are stored in hashed forms.

Plain public keys is stored in the message signature, like the public key of the sender and the receptor. Every content is stored with symetric encryption, using random initialization vectors and static salts for each operation kind.

**It's possible to obtain and decrypt information using a public key if it is stored on a network.** This is because the public key is the encrypted data password for its bearer, not its private key. A private key generates the exact public key, which is used to encrypt information.

Content are stored within directories described by public key hashes, making it ineffective to look up a message using only its public key. The SkyID of content is also hashed in the database, making it impossible to search for a SkyID directly in the files.

Technically, the protocol uses the `AES-128` algorithm for symetric crypto and `BLAKE3` for hashing operations. These algorithms are considered stable and safe so far.

> An modified network can always be **malicious**. Trust the network you are using, because its source code can be changed and don't keep the anonymity of receivers or senders.

## Hosting it

It is always ideal that the machine where the network is running has all its operating system modules updated and has strong authentication (like SSH key). Hosting companies can have access to your files, and therefore, your network. In your network files there are files that define the public keys of network administrators and moderators, who can access the network administration panel.

Again it is reminded that it is technically impossible to invade all contents at the same time (unless the attacker has all the public keys on the network and access to it's files). Unfortunately, if someone's has someone's public key, they can access the contents of that key even without their private key, as described in the section above.

## ISP, DNS and TOR

Connections can be intercepted before they even reach a Starless Sky network. In cases of extreme privacy, it is recommended to use advanced proxies like the Tor network that legitimately hide your IP. In addition, it is possible to use the Starless Sky network on a tor network.

The recipe for perfect privacy using Starless Sky is:

- Self hosting an Starless Sky Network using your own machine with enabled firewall;
- Hosting your Starless Sky Network on Tor Network;
- Choosing random and strong keys for your network settings;
- Having a good anti-virus on your computer;
- Using VPN or Proxy where it's possible.

According to the project's license, The MIT License, Starless Sky or Project Principium does not provides any warranty about the content circulating on the network.