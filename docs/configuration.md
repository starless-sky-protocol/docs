## Configuration Variables

It's always important to have all environment variables declared in your configuration file, even the ones that will not be used. The lack of them may cause execution exceptions.

Your configuration file is located at `src/system/application/Config/config.php`.

- `development` (boolean)

   Defines if the application is in debug mode. Use only for when testing the network and not production ready. When enabled, "fatal" level error messages will display detailed error information.

- `dns` (string)

   DNS address of your network. This property is required to ensure the integrity of your network name in some situations. You can use your ip address with port too.
   
   > Do not enter protocol information such as "https" or '/' slashes.

- `crypto_key` (string)

   It's a unique network key that will be used as a salt to encrypt and decrypt information on the protocol.


## Network Information

- `information.allow_not_identified_senders` (boolean)

   Defines whether the server will allow sending a message to a public key without specifying a private key. In this case, you can send a message to a public key without identifying its address.

   The sender's public key is sent to the receiver when the sender's private key is used in the message. The sender's private key is never revealed to the receiver.

- `information.multicast_max_receivers` (int)

   Defines the maximum number of recipients a message can be sent to.

- `information.allow_message_edit` (boolean)

   Allows the sender to edit their message after sending it to the receiver. Only the sender can edit your message when it was sent using a private key. It is not possible to identify the origin of a message if it does not have a private key in its submission.

- `information.allow_message_deletion` (boolean)

   Allows both parties to delete a sent message. Both receiver and sender can delete the message if they use their private keys. With this option turned off, messages cannot be deleted from the system.

- `information.message_max_size` (string)

   Defines the maximum size of a message with its content and subject. The value is given with the unit suffix, like `512K` for 512 kbytes or `2M` for 2 megabytes. Accepted suffixes are `B`, `K`, `M`, `G` and `T`.

- `information.sign_message_max_size` (string)

   Defines the maximum size of a sign request message. The value is given with the unit suffix, like `512K` for 512 kbytes or `2M` for 2 megabytes. Accepted suffixes are `B`, `K`, `M`, `G` and `T`.

- `information.sign_max_expiration` (int)

   Maximum time in seconds for a sign request to expire.