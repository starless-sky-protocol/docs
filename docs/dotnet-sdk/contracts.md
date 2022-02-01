# ContractProvider class

## Definition

Namespace: `StarlessSky.Core.Module`

Structure:

```csharp
public partial class ContractsProvider
```

It provides methods for working with identities on the Starless Sky network.

Constructor:

```csharp
public ContractsProvider(StarlessSkyNetworkInstance instance)
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

### CreateContract

Use this function to issue a contract request with your identity to a public identity.

Return type: `ContractResult`

Structure:

```csharp
public ContractResult CreateContract(string fromPrivateKey, string toPublicKey, string message, TimeSpan expires)
```

Where:

- `fromPrivateKey`: the private key of the identity who is issuing the contract;
- `toPublicKey`: the signer public key;
- `message`: the contract text and message;
- `expires`: the time for the contract to expire if the subscriber does not act on the contract.

### ViewContract

Gets information about one generated contract. The contract can only be accessed by the issuer or the receiver.

Return type: `ContractResult`

Structure:

```csharp
public ContractResult ViewContract(string privateKey, string contractId)
```

Where:

- `privateKey`: the private key of the contract issuer or receiver;
- `contractId`: The SkyID of the issued contract.

### ActContract

Use this function for the contract receiver to make a decision about the contract. Decisions include signing or rejecting.

Return type: `ContractResult`

Structure:

```csharp
public ContractResult ActContract(string privateKey, string contractId, SignAction action)
```

Where:

- `privateKey`: the private key of the contract receiver;
- `contractId`: the SkyID of the issued contract;
- `action`: the action that will be taken in the contract.

### BrowseContracts

This method is used to get received or sent contracts through the holder's private key.

Return type: `ContractResult`

Structure:

```csharp
public BrowseContractsResult BrowseContracts(string privateKey, BrowseFolder folder, PaginationData paginationData)
```

Where:

- `privateKey`: the private key of the contract issuer or receiver;
- `folder`: the directory where the contracts will be searched;
- `paginationData`: pagination information.