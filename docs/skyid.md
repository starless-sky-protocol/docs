# SkyID

A SkyID identifier is made to identify transactions and messages circulating on the server. It is composed of static data, time-based data, and random data. The formula below describes the formation of SkyID:

```php
function gen_skyid()
{
    return 
        uniqid()                  // Base16 timestamp
      . SKYID_INSTANCE            // Instance name for the network
      . base_convert(
          rand(100000, 999999)
          , 10, 32
        );                        // Base32 random data
}
```

This identifier must not be stored directly on network storage. The protocol always use hashes to store content-sensitive information on the server.