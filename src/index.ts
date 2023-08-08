
/* MAIN */

const BigEnc = {

  /* API */

  encode: ( data: Uint8Array ): bigint => {

    let encoded = 0n;

    for ( let i = 0, l = data.length; i < l; i++ ) {

      encoded |= BigInt ( data[i] ) << ( ( BigInt ( l ) - BigInt ( i ) - 1n ) * 8n );

    }

    return encoded;

  },

  decode: ( data: bigint ): Uint8Array => {

    if ( data < 0n ) throw new Error ( 'Negative BigInts are not supported' ); //TODO: Support them too

    const decoded: number[] = [];

    while ( data ) {

      decoded.push ( Number ( data & 0xFFn ) );

      data >>= 8n;

    }

    return new Uint8Array ( decoded.reverse () );

  }

};

/* EXPORT */

export default BigEnc;
