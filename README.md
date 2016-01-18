## react-example [![Build Status](https://travis-ci.org/raymondsze/react-example.svg)](https://travis-ci.org/raymondsze/react-example.svg?branch=master)
## Highlight
<p>1. Webpack for bundling</p>
<p>2. Webpack dev server for development. (better use proxy, but to simplify, I clone a html from index.html as dev.html and import script from http://localhost:8081 instead)</p>
<p>3. Simple check boxes list created by <b>React</b>.</p>
<p>4. Covered flux pattern: <b>Alt</b> (folder: src/alt), <b>Redux</b> (folder: src/redux).</p>
<p>5. Covered observer pattern: <b>MObservable</b> (folder: src/mobservable).</p>
<p>6. ES7 scripts style</p>
<p>7. Simple examples to get insight to <b>React</b>, <b>AltJs</b>, <b>Redux</b>, <b>MObservable</b>.
<p>8. Save your time to decide which pattern is best fit for you in using <b>React</b>.</p>

## Normal Build
<p>1. git clone</p>
<p>2. cmd: npm install</p>
<p>3. cmd: npm run build</p>
<p>4. cmd: npm install -g http-server</p>
<p>5. cmd: http-server</p>
<p>6. go to http://localhost:8080</p>

## Hot Module Replacement
<p>1. cmd: http-server</p>
<p>2. cmd: npm run dev</p>
<p>3. go to http://localhost:8080/dev</p>
<p>4. modify the source codes, the browsers will auto-refresh</p>

## Performance comparison
<p>go to http://localhost:8080 after Normal Build, try on it, for each library, 2000 checkboxes are rendered for testing.</p>
<p>MObservable is fastest as it observe the observable property used in last render only to reduce unnecessary virtual dom difference.</p>

## Code comparison
<p>check the source code of src folder, in my opinon, <b>MObservable</b> and <b>Redux</b> is simplest and <b>Redux</b> is easy to learn.</p>

## LICENSE
The MIT License (MIT)

Copyright (c) 2016 Sze Ka Wai Raymond

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.