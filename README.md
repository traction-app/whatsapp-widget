# Whatsapp Widget

## Instalação

Para utilizá-lo, copie o código abaixo e cole-o no antes do fechamento da tag body (</body>) de sua página! 

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
