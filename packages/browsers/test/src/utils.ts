/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as readline from 'readline';
import {Writable, Readable} from 'stream';

export function createMockedReadlineInterface(
  input: string
): readline.Interface {
  const readable = Readable.from([input]);
  const writable = new Writable({
    write(_chunk, _encoding, callback) {
      // Suppress the output to keep the test clean
      callback();
    },
  });

  return readline.createInterface({
    input: readable,
    output: writable,
  });
}
