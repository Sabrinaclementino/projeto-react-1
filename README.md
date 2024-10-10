# A Página

Estrutura de uma página estática de notícias criada com a biblioteca React.
Como boa prática, utilizamos componentes para tornar mais
claro onde está cada parte do código. Logo, em conjunto eles
formem o todo da página.

# Práticas:

JSX (HTML E JS) <br>
Referenciar imagens através de variáveis em JavaScript <br>
CSS (Referenciando por id ou classes; Também Inline) <br>
Todo componente em classe deve extender React.Component

Modificar dados nos componentes de forma dinâmica com o conceito de props(Objeto oculto):<br>

<b>Exemplo:</b> <br>
Arquivo: App.jsx

<<code>Article title="Space News"</code>/>

Arquivo: Article.jsx

<code>
this.props = { title: "Space News"}
</code>

<br>

# Conceito de estados (State)

O componente Counter foi criado à parte para trabalhar
o conceito de estados.

Utilizamos o state para atualizar alguma parte específica da aplicação,
dessa forma o React observa e modifica apenas onde realmente é necessário
deixando a página mais leve.

1 - Inicializa no construtor com o valor desejado:

Arquivo: Counter.jsx

<code>
this.state = { contador: 0}
</code>

<br>
2 - Declara no elemento HTML desejado e especifica qual evento irá chamar o método set.State através de uma função e lógica desenvolvida:

<br>

<b>Exemplo:</b>

<code>button onClick={() => {this.setState({ contador: this.state.contador - 1})}}</code>

# Tecnologias

<ul>
  <li>React</li>
  <li>JSX</li>
  <li>CSS</li>
</ul>

# Ferramentas

<ul>
  <li>VScode</li>
  <li>Github</li>
  <li>Página Web</li>
</ul>
