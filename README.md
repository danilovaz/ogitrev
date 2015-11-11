Ogitrev o novo framework font-end muito facil de implementar totalmente responsivo com o gulp e Sass com alguns plugins para facilitar seu desenvolvimento.

Modo de Implementação

Instale o gulp
<pre>
  $ npm install --global gulp
</pre>

Faça o update do package.json
<pre>
  $ npm update 
  $ npm install browser-sync --save-dev
</pre>

Faça o update do bower.json 
<pre>
  $ bower update 
</pre>

E por fim altere o arquivo gulpfile.js para os caminhos que corresponde as pasta o seu projeto
<pre>
  return gulp.src('assets_externo/scss/modules/*.scss')
    .pipe(rename("orgitrev.min.css"))
    .pipe(gulp.dest('app/assets/css'))
</pre>

pra utilizar basta adicionar as classes
<pre>
 col-s1 em diante até 12 para mobile 
 
 col-m1 em diante até 12 para desktop
</pre>
