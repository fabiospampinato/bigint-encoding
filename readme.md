# BigInt Encoding

BigInt encoding, a simple way to convert Uint8Arrays into BigInts, and vice versa.

## Install

```sh
npm install --save bigint-encoding
```

## Usage

```ts
import BigEnc from 'bigint-encoding';

// It can convert a Uint8Array into a BigInt

const uint8 = new Uint8Array ([ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33 ]);
const encoded = BigEnc.encode ( uint8 ); // => 22405534230753928650781647905n

// It can also go the other way, and covnert a BigInt into a Uint8Array

const decoded = BigEnc.decode ( encoded ); // => Uint8Array(12) [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]
```

## License

MIT © Fabio Spampinato
