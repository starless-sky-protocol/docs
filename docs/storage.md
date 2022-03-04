# Storage

Starless Sky Network storage is hybrid with encrypted storage and its own blockchain. For each transaction in the network, it is made on the Blockchain, in which it will close the block and all transactions that were in queue will be closed.

For example, when sending a message, it stores a copy of the message for the sender and for the receivers, and with that, a transaction is created on the Blockchain with the message content and the transaction command.

The content that is stored in Blockchain transactions is:
- From public address;
- To public addresses;
- Command;
- Content BLAKE3 hash.

Then, after a certain time or a specific number of transactions, the block is created and closed, and with it, the transactions that were queued are written on the Blockchain network, not allowing the modification of the information anymore.

## Network nodes

Nodes are the clients that connect to Starless Sky's Blockchain network and validates it's information. They get a list of blocks already closed on the network and calculate them one by one, following the formula:

```js
// JS pseudo-code

// This variable is the hash we expect for the next n+1 block.
let expected_digest = "";
blocks.forEach(block => {
    // Get block information using /bc/read route and stores the response it into an object
    let block_data = getBlockData(block);
    // Gets the current block header. The header must be the hash of
    // the previous block.
    let actual_header = block_data.header;
    if(expected_digest == "") {
        // If the expected hash hasn't been calculated yet, it's because
        // this is the first block on the network.
        console.log("This is the genesis block!");
    } else {
        if(actual_header == expected_digest) {
            // The hash of the previous block matches the expected header
            // in the current block.
            console.log("This block was validated with the previous block's header");
            return halt();
        } else {
            // Previous block hash is not what was expected by the
            // current block.
            console.warn("This block's content is different from the previous header")
        }
    }
    // The expected hash for the next block is calculated from the hash
    // of the current block JSON.
    expected_digest = blake3(JSON.stringfy(block_data));
});
```

That is, the hash of the next block `n+1` must always be `h(n)`. Block validation must be done by clients independently of the server, where clients use their own applications to authenticate the blocks.

If the last blocks are deleted, the network will remains valid, however, for each action taken on the server, a transaction is generated, and if the transaction is not associated with a block after some time it is likely that the network has been modified with malicious intent.

> If a transaction is not found in any block after some time, the node/client must warn the user that the network has been tampered.

The information content must also be validated if the transaction exists. There can be multiple transactions for a single SkyID, such as edits to a message that are included in the same message ID. Each edit will produce a transaction, with a new content digest. **Therefore, always the last transaction must be validated, and not the previous ones.**

## Transactions commands

This table shows all transactions that are generated on the server, what the content is and the formula to calculate the content.

Where:

- `h` stands for `blake3_hash(data)`;
- `j` stands for `json(data)`;
- `sH` stands for sender's public address;
- `rH` stands for receiver's public address.

------

### Identities

- `identity.gen-private-key`: Generates a private key.

   Validation formula: no content is generated.

- `identity.set-public-info`: Sets public information for private key.

   Validation formula: `h(name + biography)`

- `identity.delete-public-info`: Deletes public information for private key.

   Validation formula: no content is generated.

### Messages

- `message.send`: Send a message.

   Validation formula: `h(id + subject + content + j(manifest) + sH + j(rH1, rH2, rH3...))`

- `message.edit`: Edits a message.

   Validation formula: `h(id + subject + content + j(manifest) + sH + j(rH1, rH2, rH3...))`

- `message.delete`: Deletes a message.

   Validation formula: no content is generated. Message should be checked if still exists.

### Contracts

- `contract.send`: Sends a contract request.

   Validation formula: `h(message + sH + rH + expiration + issue_time + j(status))`

- `contract.decide`: Decide on a contract request.

   Validation formula: `h(message + sH + rH + expiration + issue_time + j(status))`