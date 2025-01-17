/**
 * Copyright 2020 Google LLC
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
// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

const supported = (() => {
  // ToDo: Remove this check once Permissions Policy integration
  // has happened, tracked in
  // https://github.com/WICG/file-system-access/issues/245.
  if (self !== top) {
    try {      
      // This will succeed on same-origin iframes,
      // but fail on cross-origin iframes.
      top.location + '';
    } catch {      
      return false;
    }
  } else if ('chooseFileSystemEntries' in self) {
    return 'chooseFileSystemEntries';
  } else if ('showOpenFilePicker' in self) {
    return 'showOpenFilePicker';
  }
  return false;
})();

export default supported;
