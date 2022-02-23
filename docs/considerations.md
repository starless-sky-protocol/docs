## Storage

Starless Sky Networks encrypts contents in it's storage, such as identity info or contracts. 

Data storage encryption is both symmetrical and asymmetrical. The symmetry is in the key shared by the sender and the receiver, which is given by the following logic:

<div class="img-wrapper">
    <img src="/img/assymetric_shared_key.png" />
</div>

In this way, it makes an invasion of information practically impossible if the attacker does not have both a private key and a public key. 

## Hosting it

It is always ideal that the machine where the network is running has all its operating system modules updated and has strong authentication (like SSH key). Hosting companies can have access to your files, and therefore, your network (not the content circulating on it). In your network files there are files that define the public keys of network administrators and moderators, who can access the network administration panel.

In any case, the server's main cryptographic keys can be exposed in the event of an intrusion into the server's files. Even with them, it is not possible to decrypt information without the private keys of the transactions.

## ISP, DNS and TOR

Connections can be intercepted before they even reach a Starless Sky network. In cases of extreme privacy, it is recommended to use advanced proxies like the Tor network that legitimately hide your IP. In addition, it is possible to use the Starless Sky network on a tor network.

The recipe for perfect privacy using Starless Sky is:

- Self hosting an Starless Sky Network using your own machine with enabled firewall;
- Hosting your Starless Sky Network on Tor Network;
- Choosing random and strong keys for your network settings;
- Having a good anti-virus on your computer;
- Using VPN or Proxy where it's possible.

According to the project's license, The MIT License, Starless Sky or Project Principium does not provides any warranty about the content circulating on the network.