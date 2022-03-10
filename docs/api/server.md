# Server

This topic covers routes relating to the server and it's network in general.

## Ping

Use this route to get useful information about the network.

Command:

    server.ping

Example response:

```json
{
	"success": true,
	"messages": [],
	"response": {
		"sls_server_version": "0.16.500",
		"php_version": "8.1.2",
		"operating_system": "WINNT",
		"server_info": {
			"allow_not_identified_senders": true,
			"allow_message_edit": true,
			"allow_message_deletion": true,
			"message_max_size": "2M",
			"sign_message_max_size": "256K",
			"sign_max_expiration": 3600
		}
	}
}
```

## Get closed blocks

Use this route to get a list of blocks that have been calculated and closed on the network.

Command:

    server.bc.list

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Fetching closed blocks on this network"
		}
	],
	"response": [
		"b-00380854387773600000132961.closed",
		"b-00380855658104200000434548.closed",
		"b-00380861051455699968431625.closed",
		"b-00381325432081000000905854.closed",
		"b-00382166308097100032645204.closed",
		"b-00382709801329900032490227.closed"
	],
	"transaction": null
}
```

## Get block information

Use this route to read the transactions and contents of a block.

Command:

    server.bc.read

Body:

```json
{
	"block": "block-id"
}
```

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Block fetched"
		}
	],
	"response": {
		"transactions": [
			{
				"command": "identity.set-public-info",
				"from": "0x0858cdcdbbac7952d5cbc49e6098b2a74550b2e18535467d9dc72032131eb66849c4905ec2c621061111050043c37bf15722d3b58803261c43e0c00cac48ca0a",
				"to": "",
				"sky_id": "",
				"content": "911e374cae28923a4d9f48ed06e6ee4ab24f910425bfe9f5cd03d17ab0023581",
				"time": 1646217053,
				"id": "00380521400632400000684953"
			},
			...
		],
		"header": "4d067153ac729a4a7e8220c97935ffba67487860d58298ceeb23864369867d9f",
		"close_time": 1646217056
	},
	"transaction": null
}
```

## Flush transactions to block

Use this route to close all open transactions and close the block on the Blockchain network.

Command:

    server.bc.flush

Body:

```json
{
	"blockchain_close_key": "..."
}
```

where:
- `blockchain_close_key`: The network symmetric key to close the block. It is defined in the [network configuration](/#/configuration).

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Current transactions block flushed"
		}
	],
	"response": null,
	"transaction": null
}
```