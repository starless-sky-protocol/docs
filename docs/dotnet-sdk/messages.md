# MessageProvider class

## Definition

Namespace: `StarlessSky.Core.Module`

Structure:

```csharp
public partial class MessageProvider
```

It provides methods for working with messages on the Starless Sky network.

Constructor:

```csharp
public MessageProvider(StarlessSkyNetworkInstance instance)
```

## Properties and fields

### NetworkInstance

Defines the Starless Sky network this provider will work with.

Type: `StarlessSky.Core.API.StarlessSkyNetworkInstance`

Structure:

```csharp
StarlessSkyNetworkInstance NetworkInstance { get; set; }
```

## Methods

### SendMessage

To send a message to a public key on the network, use the following endpoint:

Return type: `SendMessageResult`

Structure:

```csharp
public SendMessageResult SendMessage(string fromPrivateKey, string toPublicKey, MessageBody message)
```

where:
- `fromPrivateKey`: sets the sender's private key. It is used to show the origin of the message (by sending its public key). This field is optional when [`ALLOW_NOT_IDENTIFIED_SENDERS`](/configuration) is `false`.
- `toPublicKey`: sets the recipient's public key. Sending a message to a random public key is like sending a message to the wind.
- `message`: the message contents.

### ReadMessage

This method is used to read a sent or received message. When it is an incoming message, the private key must belong to its recipient. When sent, the private key must belong to the sender. The messages are identical for both ends.

Return type: `ReadMessageResult`

Structure:

```csharp
public ReadMessageResult ReadMessage(string privateKey, string messageId)
```

where:
- `private_key`: the private key of the message receiver or sender.
- `messageId`: the SkyID of the message that will be returned.

### FetchMessages

This method is used to get received or sent messages through the holder's private key.

Return type: `FetchMessagesResult`

Structure:

```csharp
public FetchMessagesResult FetchMessages(string fromPrivateKey, BrowseFolder folder, PaginationData paginationData)
```

where:
- `fromPrivateKey`: the private key of the message sender or receiver.
- `folder`: the folder in which the messages will be searched.
- `paginationData`: the pagination data of the function.

### EditMessage

Use this method to edit the message after it has been sent to the receiver. It can only be used by the sender of the message and only if [`information.allow_message_edit`](/configuration) is enabled on the network.

Return type: `SendMessageResult`

Structure:

```csharp
public SendMessageResult EditMessage(string fromPrivateKey, string toPublicKey, string messageId, MessageBody newMessage)
```

where:
- `fromPrivateKey`: sets the sender's private key. It is used to show the origin of the message (by sending its public key). This field is optional when [`ALLOW_NOT_IDENTIFIED_SENDERS`](/configuration) is `false`;
- `toPublicKey`: sets the recipient's public key. Sending a message to a random public key is like sending a message to the wind;
- `messageId`: the SkyID of the message to be edited;
- `newMessage`: the new message contents.

### DeleteMessage

Use this method for the receiver permanently delete an incoming message in their public key. This method can be used by both ends of the message, as sender and receiver, and the message is deleted for both ends.

Return type: `EmptyResponseResult`

Structure:

```csharp
public EmptyResponseResult DeleteMessage(string privateKey, string messageId)
```

where:
- `private_key`: the private key of the message receiver or sender.
- `messageId`: the SkyID of the message that will be deleted.