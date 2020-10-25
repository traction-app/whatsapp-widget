# Whatsapp Widget

## Instalação

Para utilizá-lo, copie o código abaixo e cole-o no antes do `</body>` de sua página! 

```html
<script type="text/javascript">
;(function(src, config) {
  var s = document.createElement( 'script' );s.setAttribute( 'src', src );
  s.onload = function () { new WppWidget(config, this) }
  document.body.appendChild( s );
})('https://d2st9y38zyzf5b.cloudfront.net/app.js', {
  'phone': '+55111111111'
});
</script>
```

Altere no trecho do código o telefone *+55111111111* para o telefone final que será enviado a mensagem. 

## Parâmetros Opcoinais

| Atributo  | Descrição | Padrão |
| ------------- | ------------- | ------------- |
| endpoint      | Endpoint para o envio dos dados preenchidos para um serviço externo  | *null* |
| message       | Mensagem de sugestão para o usuário enviar pelo WhatsApp  | Olá, gostaria de saber mais informações! | 
| title         | Título padrão do formulário exibido  | Envie sua mensagem! 👋' | 
| description   | Descrição padrão do formulário | Preencha os dados para abrir a janela do WhatsApp |
| cta           | Label do botão de envio do formulário | Enviar mensagem |


## Exemplo

Exemplo de código com campos opcionais

```html
<script type="text/javascript">
;(function(src, config) {
  var s = document.createElement( 'script' );s.setAttribute( 'src', src );
  s.onload = function () { new WppWidget(config, this) }
  document.body.appendChild( s );
})('https://d2st9y38zyzf5b.cloudfront.net/app.js', {
  'phone': '+55111111111',
  'endpoint': 'https://meucrm.com/leads',
  'message': 'Olá, preciso de ajuda!',
  'cta': 'Me chame no WhatsApp!'
});
</script>
```
