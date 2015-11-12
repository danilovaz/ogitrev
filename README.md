Ogitrev o novo framework font-end baseado em grids muito facil de implementar totalmente responsivo com o gulp e Sass com alguns plugins para facilitar seu desenvolvimento.

Modo de Implementação
Antes de fazerem a alteração no gulpfile.js atualizem a versão local do gulp
<pre>
$ npm update gulp
</pre>
Altere o arquivo gulpfile.js para os caminhos que corresponde as pasta o seu projeto
<pre>
  return gulp.src('dir/scss/modules/*.scss')
    .pipe(rename("orgitrev.min.css"))
    .pipe(gulp.dest('app/assets/css'))
</pre>

pra utilizar basta importar o seguinte arquivo e adicionar as classes
<pre>
 app/assets/css/ogitrev.css
 
 col-m1 em diante até 12 para mobile 
 
 col-d1 em diante até 12 para desktop
</pre>
