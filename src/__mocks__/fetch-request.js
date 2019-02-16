// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

'use strict'

const tuneAbc = 'X:1\nX:2'

export default function request(url) {
    return new Promise((resolve, reject) => {
        process.nextTick(() =>
            url
                ? resolve(tuneAbc)
                : reject({
                      error: 'bad url',
                  })
        )
    })
}
