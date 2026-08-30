# test.py

from enkrypto.enkrypto_sdk.core.sdk import EnkryptoSDK

config = {
    "type": "json",
    "path": "data.json",
    "endpoint": "http://localhost:8000/proof",
    "api_key": "test"
}

sdk = EnkryptoSDK(config)
sdk.init()
sdk.start()