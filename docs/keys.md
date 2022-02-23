## Private Keys

A private key is the master key that controls an identity on the network. It can be used to send messages, communicate or generate it's public key.

A private key should never be exposed or sent to anyone, as it is used to gain control over that identity on the server.

Private keys are generated from random cryptographic data. When generating a random key by the server, the `secp521r1` curve is used to generate this key. After generating the private key, the public key is encrypted and stored on the server, associating it with a public address, where it reveals authentication information generated on the server.

<div class="img-wrapper-lg">
    <img src="/img/private_key.png" />
</div>

Private keys are never stored on the server.

## Public Keys and Public Addresses

Public keys are keys that are generated from private keys, and are stored privately on a Starless Sky network. The public address is revealed to the bearer of a key, which this address points to a public key within the network itself.

These keys are generated through the private keys, but irreversibly. A private key will always produce the same public key.

Public keys are derived while calculating transactions in the server, using the following settings:

```php
/* 
    Derive standard for encryption without a unique key beyond what
    the server already has.
*/
define("SLOPT_DEFAULT", 
    ["salt" => 0xf74b15, "iterations" => 1, "length" => 32, "prefix" => ""]);

/*
    This is the derivation of the public key to the public address,
    using this information and properties.

    Keys derived from this property always start with 0x to indicate
    that it is a public address.
*/
define("SLOPT_PUBLIC_KEY_ADDRESS", 
    ["salt" => 0xff81db, "iterations" => 8, "length" => 64, "prefix" => "0x"]);

/*
    This is the derivation that, from a public address, the salt to the
    folder where information will be stored is calculated.
*/
define("SLOPT_PUBLIC_KEY_DIRNAME", 
    ["salt" => 0xdf70cb, "iterations" => 2, "length" => 32, "prefix" => ""]);

/*
    The secret derived from a public address is often used to store symmetric
    information on the server. Even decrypting something using secret of a
    public key, the sensitive content still remains encrypted with the shared
    keys (private and public).
*/
define("SLOPT_PUBLIC_KEY_SECRET",
    ["salt" => 0xb63ec0, "iterations" => 5, "length" => 32, "prefix" => ""]);

/*
    The SkyId Derive is used to not reveal content IDs directly in your
    network storage.
*/
define("SLOPT_SKYID_HASH",
    ["salt" => 0x7b92bf, "iterations" => 2, "length" => 16, "prefix" => "sky-"]);
```