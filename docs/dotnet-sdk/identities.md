# IdentityProvider class

## Definition

Namespace: `StarlessSky.Core.Module`

Structure:

```csharp
public partial class IdentityProvider
```

It provides methods for working with identities on the Starless Sky network.

Constructor:

```csharp
public IdentityProvider(StarlessSkyNetworkInstance instance)
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

### GenerateKeyPair

Generates a cryptographically random secure key pair for the network.

Return type: `GenerateKeyPairResult`

Structure:

```csharp
public GenerateKeyPairResult GenerateKeyPair()
```

### SetIdentityInfo

Defines information for a public identity using their private key.

Return type: `IdentityInfoResult`

Structure:

```csharp
public IdentityInfoResult SetIdentityInfo(string private_key, IdentityInfo publicIdentityInfo)
```

Where:

- `private_key`: the private key of the identity bearer on the network;
- `publicIdentityInfo`: the `IdentityInfo` object containing the identity information.

### GetIdentityInfo

Gets information for a public identity using their public key.

Return type: `IdentityInfoResult`

Structure:

```csharp
public IdentityInfoResult GetIdentityInfo(string public_key)
```

Where:

- `public_key`: the public key of who you want to see information about.

### DeleteIdentityInfo

Deletes information for a public identity using it's private key.

Return type: `EmptyResponseResult`

Structure:

```csharp
public EmptyResponseResult DeleteIdentityInfo(string private_key)
```

Where:

- `private_key`: the private key of the identity bearer on the network;