// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { fromB64 } from '@mysten/sui.js';

// TODO : Import from  SDK
import { VALDIATOR_NAME } from '~/pages/validator/ValidatorDataTypes';

const textDecoder = new TextDecoder();

export function getName(rawName: string | number[]) {
    let name: string;

    if (Array.isArray(rawName)) {
        name = String.fromCharCode(...rawName);
    } else {
        name = textDecoder.decode(fromB64(rawName));
        if (!VALDIATOR_NAME.test(name)) {
            name = rawName;
        }
    }
    return name;
}
