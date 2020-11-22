# render.js

Библиотека для шаблонизации кода

## Документация

```javascript
_({
  code: 'render.js'
});
```

Код выше заменит ***все*** ```{code} { code } {{code}} {{ code }}``` на render.js

Для изменения только в определёных местах можно задать ```el```:

```javascript
_({
  el: '.class', //или # для id
  code: 'render.js'
});
```

Так мы заменим только ```{code} { code } {{code}} {{ code }}``` в теге с классом class!

## Больше примеров:

![1](https://raw.githubusercontent.com/htmlcssphpjs/render.js/main/imgs/1.png)
![2](https://raw.githubusercontent.com/htmlcssphpjs/render.js/main/imgs/2.png)
![3](https://raw.githubusercontent.com/htmlcssphpjs/render.js/main/imgs/3.png)
![4](https://raw.githubusercontent.com/htmlcssphpjs/render.js/main/imgs/4.png)
![5](https://raw.githubusercontent.com/htmlcssphpjs/render.js/main/imgs/5.png)
