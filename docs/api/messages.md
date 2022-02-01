# Messages

This topic explains how the API works with messages on the network.

## Sending a message

To send a message to a public key on the network, use the following endpoint:

    POST /messages

```json
{
    "private_key": "<from_private_key>",
    "public_key": "<to_public_key>",

    "message": {
        "subject": "Important encrypted message",
        "content": "Hello, buddy!"
    }
}
```

where:
- `public_key`: sets the recipient's public key. Sending a message to a random public key is like sending a message to the wind.
- `private_key`: sets the sender's private key. It is used to show the origin of the message (by sending its public key). This field is optional when [`ALLOW_NOT_IDENTIFIED_SENDERS`](/configuration) is `false`.
- `message.subject`: It's the subject of the message. Ideally, it should be like the subject of an email: brief and short.
- `message.content`: It's the content of the message. It is always plain text, it is never interpreted by the recipient (or at least it shouldn't be).

Example successfully response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Message inserted at public key"
		}
	],
	"response": {
		"pair": {
			"from": "0x2220b996f0f72a4574cbc4a9cdf0cf083565e23ff289d5dd9c808de91ae6238f",
			"to": "0x9f992889e413574676fccccd5307561ab589a5b903b14c60e28414ce609873b3"
		},
		"message_length": "20 bytes",
		"id": "61f769423558a1000u19r",
		"message_blake3_digest": "47b46937519b3d806522c33d1357ed26a22af7832369eb211719b6f49ec5373b"
	}
}
```

## Browse messages

This method is used to get received or sent messages through the holder's private key.

> Note: each message on the response trims out the first 30 characters of each message as a preview only. To read each complete message, consider calling a complete message read endpoint.

    GET /messages

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
- `private_key`: the private key of the message sender or receiver.
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
			"total": 6,
			"query": 6
		},
		"messages": [
			{
				"id": "61f7628ce783e1000hf18",
				"created_at": 1643602572,
				"is_modified": false,
				"from": "0x053470de85cf0174258759526e08aeca764271db393a9e4d430455c2da12492b",
				"to": "0x6593f4efda015252eea73d0ce55fee5c2a652fc6815c493b665c0679c60548da",
				"message": {
					"subject": "Hey buddy",
					"content": "test message"
				}
			}
		]
	}
}
```

## Read message

This method is used to read a sent or received message. When it is an incoming message, the private key must belong to its recipient. When sent, the private key must belong to the sender. The messages are identical for both ends.

    GET /messages/<id>

```json
{
    "private_key": "<private_key>"
}
```

where:
- `id`: a parameter in the URL that is the ID of the message that will be returned.
- `private_key`: the private key of the message receiver or sender.

Example response:

```json
{
	"success": true,
	"messages": [],
	"response": {
		"id": "61f75d85293131000obm2",
		"manifest": {
			"created_at": 1643601285,
			"updated_at": 1643601285,
			"is_modified": false,
			"message_blake3_digest": "880fd836670533afba04563b9e679ca9ed53d122e778778675902c29484b58f8"
		},
		"pair": {
			"from": "0x053470de85cf0174258759526e08aeca764271db393a9e4d430455c2da12492b",
			"to": "0x6593f4efda015252eea73d0ce55fee5c2a652fc6815c493b665c0679c60548da"
		},
		"size": "572 bytes",
		"message": {
			"subject": "Full message subject",
			"content": "Full message content"
		}
	}
}
```

## Edit message

Use this route to edit the message after it has been sent to the receiver. It can only be used by the sender of the message and only if [`information.allow_message_edit`](/configuration) is enabled on the network.

> Note: using this route the `manifest.is_modified` attribute of the message manifest will be changed to `true` and a new digest hash will be calculated for the new message. The message SkyID remains preserved.

    PUT /messages/<id>

```json
{
	"private_key": "<from-private-key>",
	
	"message": {
		"content": "new content",
		"subject": "new subject"
	}
}
```

where:
- `id`: a parameter in the URL that is the ID of the message that will be edited.
- `private_key`: the private key of the message sender.
- `message.subject`: The new message subject.
- `message.content`: The new message content.

The response, when successful, has an identical structure to a message sending.

## Delete message

Use this method for the receiver permanently delete an incoming message in their public key. This method can be used by both ends of the message, as sender and receiver, and the message is deleted for both ends.

> Note: this method only works if [`information.allow_message_deletion`](/configuration) is enabled on the server.

    DELETE /messages/<id>

```json
{
    "private_key": "<private-key>"
}
```

where:
- `id`: a parameter in the URL that is the ID of the message that will be permanently deleted.
- `private_key`: the private key of the message receiver or sender.

Example response:

```json
{
	"success": true,
	"messages": [
		{
			"level": "info",
			"message": "Message successfully deleted"
		}
	],
	"response": null
}
```