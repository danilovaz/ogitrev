# Ogitrev

> Ogitrev the new front-end framework based on grids very easy to implement fully responsive to gulp and Sass with some plugins to facilitate its development.

## Implementation mode

Before making the change in gulpfile.js update the local version of gulp
<pre>
$ npm update gulp
</pre>
Change the gulpfile.js file for paths that matches the folder your project

<pre>
  return gulp.src('dir/scss/modules/*.scss')
    .pipe(rename("orgitrev.min.css"))
    .pipe(gulp.dest('app/assets/css'))
</pre>

to use simply import the following file and add classes
<pre>
 app/assets/css/ogitrev.css

 col-m1 on until 12 for mobile

 col-d1 on until 12 for desktop
</pre>

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/bandinelli/ogitrev/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/bandinelli/ogitrev/issues).

## License

The MIT License

Copyright (c) 2015, Erick de Oliveira

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

---

Made with :heart:  by [Erick de Oliveira](https://github.com/bandinelli)
