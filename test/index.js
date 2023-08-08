
/* IMPORT */

import {describe} from 'fava';
import BigEnc from '../dist/index.js';

/* MAIN */

describe ( 'Bigint Encoding', it => {

  it ( 'can convert a positive bigint back and forth', t => {

    const input = 12345678901234567890n;
    const decoded = BigEnc.decode ( input );
    const encoded = BigEnc.encode ( decoded );

    t.is ( encoded, input );

  });

  it ( 'throws for negative bigints', t => {

    const input = -12345678901234567890n;

    t.throws ( () => BigEnc.decode ( input ) );

  });

  it ( 'can convert a Uint8Array back and forth', t => {

    const input = new Uint8Array ([ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33 ]);
    const encoded = BigEnc.encode ( input );
    const decoded = BigEnc.decode ( encoded );

    t.deepEqual ( decoded, input );

  });

});
