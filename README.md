Rainy.js
========
Simple raining effect using HTML5 canvas.


Usage
-----
Following gives the sample HTML snippet
```html
  <canvas id="rainyjs"></canvas>
  <script>
    var rainyjs = new Rainyjs();
    rainyjs.setCanvas("#rainyjs").setLevel(10).rainy();
  </script>
```
where the `setCanvas` and the `setLevel` are optional; default values shown above respectively.

The specified canvas would be resized to fit the window size automatically.


License
-------
Licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).

Copyright (c) 2013 Shao-Chung Chen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
