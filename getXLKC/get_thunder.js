// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.



document.addEventListener('DOMContentLoaded', function () {

  
  chrome.tabs.executeScript(null, {file: "content_script.js"});

});
