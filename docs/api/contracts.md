# Smart Contracts and Signing information

Use these functions to issue, verify and validate smart contracts on the Starless Sky network.

## Issue Contract

Use this function to issue a contract request with your identity to a public identity.

Command:

    contract.send

Body:

```json
{
	"private_key": "<from-private-key>",
	"public_key": "<to-public-key>",
    "message": "Authorize login at foobar.com...",
    "expires": 3600
}
```

where:
- `private_key`: the private key of the contract issuer;
- `public_key`: the public key of the target signer;
- `message`: the contract content message. It should be smaller than `information.sign_message_max_size`.
- `expires`: the time in seconds for the contract to expire if the recipient does not sign the message. If the value is lesser than `information.sign_max_expiration`, the server's default sign maximum expiration time will be used.

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Signing request created successfully."
		}
	],
	"response": {
		"id": "61f5a6a28551c1000da7r",
		"issued": 1643488930,
		"expires": 3600,
		"message": "Authorize login at foobar.com...",
		"issuer": {
			"public_key": "0x943ac28422beb80a4a096b8a427222798050c56d50d728541edfb33ce5e6d7f0"
		},
		"signer": {
			"public_key": "0x6cedd7e13f237a4617f00f895fac9d7e79615538c1a8d98b15aa437b2caddf2e"
		},
		"status": {
			"sign_status": null,
			"date": null
		}
	}
}
```

## Read Contract

Gets information about one generated contract. The contract can only be accessed by the issuer or the receiver.

Command:

    contract.read

Body:

```json
{
	"id": "<contract-id>",
    "private_key": "<issuer-private-key>"
}
```

where:
- `private_key`: the private key of the contract issuer or receiver;
- `id`: The SkyID of the issued contract.

> On response, `status.sign_status` can have three values:
> - `true`: the signer signed the contract;
> - `false`: the signer rejected the contract;
> - `null`: the signer hasn't decided about the contract.

## Browse contracts

This method is used to get received or sent contracts through the holder's private key.

Command:

    contract.list

Body:

```json
{
    "private_key": "<owner_private_key>",
    "folder": "inbox",
    "pagination_data": {
        "skip": 0,
        "take": 50
    }
}
```

where:
- `private_key`: the private key of the contract's issuer or signer.
- `folder`: the folder in which the messages will be searched. It can be `inbox` or `sent`.
- `pagination_data.skip`: skips an number of messages.
- `pagination_data.take`: take an number of messages. Set to `-1` to get all messages from skip.

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Query performed successfully"
		}
	],
	"response": {
		"pagination_data": {
			"total": 4,
			"query": 4
		},
		"contracts": [
			{
				"id": "61f5a6a2282281000mhme",
				"issued": 1643488930,
				"from": "0x943ac28422beb80a4a096b8a427222798050c56d50d728541edfb33ce5e6d7f0",
				"to": "0x6cedd7e13f237a4617f00f895fac9d7e79615538c1a8d98b15aa437b2caddf2e",
				"message": "Please sign this message",
				"sign_status": false
			}
		]
	}
}
```

## Decide Contract

Use this function for the contract receiver to make a decision about the contract. Decisions include signing or rejecting.

Command:

    contract.opt

Body:

```json
{
	"id": "<contract-id>",
	"private_key": "<signer-private-key>",
    "term": "sign"
}
```

where:
- `term`: is the action where the receiver will act in this contract. Terms can be one of:
  - `sign`: The receiver signs the contract and authenticate it.
  - `refuse`: The receiver refuses the contract and rejects it.
- `private_key`: the private key of the contract receiver/signer;
- `id`: The SkyID of the contract.

> Note: after signing or refusing a contract it can no longer be changed.

The response has an identical structure to the contract generation.