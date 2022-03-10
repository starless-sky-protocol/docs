# Starless Sky API reference

The communication protocol between a client and a Starless Sky network must be carried by RESTful data transport. This type of transport includes the command and the request body, which facilitates integration with any environment.

All calls must be made using the `HTTP POST` method, passing the command as the only argument in the URL, such as the command to send message `message.send` on Starless Sky's Mainnet:

    POST https://mainnet.starless-sky.org/message.send

After sending the body in JSON, this is an expected response:

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
		"message_length": 576,
		"id": "621f4fd6f1017fwca6lok5izurxy9",
		"message_digest": "..."
	},
	"transaction": {
		"command": "message.send",
		"from": "0xea3af8b70d9e9783f216af2c0b650be59678ba2119131c8d8483128856a9cad428645360c79a35f071b3aa123837e68fb18e4db7fcacebc2b6f70dffc77cebd3",
		"to": [
			"0x0935a68b4584913249d85f5d1aa8565368645837eb53586e57db8d848616d4f1735dad33081253c8d9796f3a15d7daae0a2096701f6ccd3f1e6ac5196c325a81"
		],
		"sky_id": "621f4fd6f1017fwca6lok5izurxy9",
		"content": "dc236ba88aa6d609746133a90e6a2b5bb67037e6c97ea4aecb8605f3333a70b7",
		"time": 1646219223,
		"id": "00382690852231600000181148"
	}
}
```

Responses will have three root fields: 

- `success`: gets whether the request was successfully executed on the server;
- `messages`: returns a array of messages that occurred during execution. Response messages have two fields: `level` and `message`. Message levels can be:
   - `info`: informative message;
   - `warn`: some important warning, but that did not prevent the execution;
   - `error`: an error on the client-side that prevented the execution;
   - `fatal`: an error on the server-side that prevented the execution;
- `response`: the response body;
- `transaction`: the Blockchain transaction of this action. If not applicable, it is `null`.