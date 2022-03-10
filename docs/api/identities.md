# Keys

Use this topic for dedicated routes for keys and key pairs.

## Generate Key Pair

Use this route to generate a cryptographically secure key pair.

Command:

    identity.gen-private-key

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Unique keypair successfully generated for this network"
		}
	],
	"response": {
		"private_key": "<-- private key -->",
		"public_key": "0x9f992889e413574676fccccd5307561ab589a5b903b14c60e28414ce609873b3"
	}
}
```

## Authenticate Private Key

Use this route to verify if a private key authenticates to the server.

Command:

    identity.auth

Body:

```json
{
	"private_key": "------ PRIVATE KEY-----"
}
```

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Unique keypair successfully generated for this network"
		}
	],
	"response": {
		"private_key": "<-- private key -->",
		"public_key": "0x9f992889e413574676fccccd5307561ab589a5b903b14c60e28414ce609873b3"
	}
}
```

## Set Identity Info on Network

Use this route to define public information about who you are on the network using your private-key. All fields are optional.

> The content must be smaller than [`MESSAGE_MAX_SIZE`](/configuration).

Command:

    identity.set-public-info

Body:

```json
{
	"private_key": "<your-private-key>",
	"public": {
		"name": "your public name",
		"biography": "your public biography name"
	}
}
```

where:
- `private_key`: the private key of the identity bearer on the network;
- `public.name`: the public name of the identity;
- `public.biography`: the short biography about the identity.

Example response:

```json
{
	"success": false,
	"messages": [
		{
			"level": "error",
			"message": "Cannot modify network identity info"
		},
		{
			"level": "error",
			"message": "Cannot authenticate the provided private key"
		}
	],
	"response": {
		"public_info": {
			"name": "",
			"biography": ""
		},
		"public_address": "0x901dff45493ddce8271fcef40e709a35740790447ef91e24e391e48a3f748d1fff50c05ab3174356a5ba7868b5dd5e390cdb1ea2a9c9ea5a2a498b8234f594f3"
	}
}
```

## Get Identity Info on Network

Use this route to get information about a public key present on the network. Note that not all public keys will return information, even if they have messages circulating on the network. Identity on the server is completely optional.

Command:

    identity.get-public-info

Body:

```json
{
	"public_keys": ["...", "...", "..."]
}
```

where:
- `public_key`: the public keys array with who you want to see information about.

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Network Identity info modified"
		}
	],
	"response": [
		{
			"public_key": "...",
			"status": "found",
			"identity": {
				"name": null,
				"biography": null
			},
			"attributes": [
				"signed"
			]
		},
		{
			"public_key": "...",
			"status": "not_found",
			"identity": {
				"name": null,
				"biography": null
			},
			"attributes": []
		},
		...
	]
}
```

## Delete Identity Info on Network

Use this route to delete your public identity information on the server.

> Note: this route does not delete other network informations such as contracts, messages, etc.

Command:

	identity.delete-public-info

Body:

```json
{
	"private_key": "<your-private-key>"
}
```

where:
- `private_key`: the private key of the identity holder on the network.

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Network Identity info deleted"
		}
	],
	"response": null
}
```