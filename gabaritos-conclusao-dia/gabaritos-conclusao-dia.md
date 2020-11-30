# Gabaritos - Exercícios de conclusão do dia

## 1 - Utilize o flexbox para alinhar as opções do menu lado a lado.

```css
nav ul {
  display: flex;
}
```

## 2 - Faça com que as opções e o campo de pesquisa fiquem na mesma linha.

```css
nav {
  display: flex;
}
```

## 3 - As opções e o campo de pesquisa devem ficar no centro do nav.

```css
nav {
  display: flex;
  justify-content: center;
}
```

## 4 - Ao redimensionar a página, quando o espaço do nav não couber o campo e as opções, deverá haver uma quebra de linha.

```css
nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
```

## 5 - Centralize a lupa do campo de pesquisa para que ela fique exatamente no centro do quadrado.

```css
.search .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## 6 - Faça com que as seções do article fiquem lado a lado.

```css
article {
  display: flex;
}
```

## 7 - Distribua o espaço horizontal livre do article igualmente entre as seções.

```css
article {
  display: flex;
  justify-content: space-evenly;
}
```

## 8 - Caso a página seja redimensionada e o espaço seja insuficiente para caber as seções, deverá haver quebra de linha.

```css
article {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
```

## 9 - Alinhe o conteúdo das seções ao centro horizontal. **Dica:** o valor padrão para `flex-direction` é `row` e para `align-items` é `stretch`.

```css
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

## 10 - Use o flexbox para colocar um espaçamento vertical entre o título e a lista de links do aside. O espaço acima do título e abaixo da lista deverá ser menor que o espaço entre o título e a lista.

```css
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
```

## 11 - Faça com que o aside fique do lado direito do main utilizando apenas o flexbox.
```css
main {
  display: flex;
}
```
