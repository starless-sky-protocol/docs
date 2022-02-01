# Keys

Use this topic for dedicated routes for keys and key pairs.

## Generate Key Pair

Use this route to generate a cryptographically secure key pair.

```
GET /identity/generate-keypair
```

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Keypair successfully generated"
		}
	],
	"response": {
		"private_key": "xT6pLrTV3LisxAe2t64MYy299LMiMJ3vvxYIRunvS2RZE0j2ODuJDhIBArt+FBYDfOrzQVfQN+Lj+VViFoLuzb9qmpYWxAcndKb5q7Vh\/2uYD+3YzOj4i9eNCxXnnk6e+aweWExxsFI9ZnEfRH8UHa44b55sf6ztNMm6blCvoU6Kx+d85gfPXHgK9S++RhaowlPkXwk8imWSMkEOOC7Yc66dnDtIRn6DmXDVvFXKDwuoSf7Gnu6dsBu0k02N9D+t+IdxIZ+yw2msAjnQWHgglrZ9x90JIC3bAUsYfLdvv3gkSZBWFuU2XzSmB3I0QsrRsKheKha1X78nlgDNExv0Qg==",
		"public_key": "0x9f992889e413574676fccccd5307561ab589a5b903b14c60e28414ce609873b3"
	}
}
```

## Set Identity Info on Network

Use this route to define public information about who you are on the network using your private-key. All fields are optional.

> The content must be smaller than [`MESSAGE_MAX_SIZE`](/configuration).

    POST /identity

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
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Network Identity info modified"
		}
	],
	"response": {
		"name": "Alessandro Dias",
		"biography": "This is my biography!"
	}
}
```

## Get Identity Info on Network

Use this route to get information about a public key present on the network. Note that not all public keys will return information, even if they have messages circulating on the network. Identity on the server is completely optional.

    GET /identity

```json
{
	"public_key": "..."
}
```

where:
- `public_key`: the public key of who you want to see information about.

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
	"response": {
		"name": "Alessandro Dias",
		"biography": "This is my biography!"
	}
}
```

## Delete Identity Info on Network

Use this route to delete your public identity information on the server.

> Note: this route does not delete other network informations such as contracts, messages, etc.

    DELETE /identity

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