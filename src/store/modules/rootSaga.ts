import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

/**
 * 
 *  Generator<
        WhatYouYield,
        WhatYouReturn,
        WhatYouAccept
    >
 */
export default function* rootSaga(): Generator<any> {
    return yield all([
        cart
    ]);
}