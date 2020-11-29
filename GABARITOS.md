# Gabaritos - Exercícios Codepen

## 1 - flex-direction

### Exercício 1
```
display: flex;
```

### Exercício 2
```
display: flex;
flex-direction: row-reverse;
```

### Exercício 3
```
display: flex;
flex-direction: column;

```

### Exercício 4
```
display: flex;
flex-direction: column-reverse;
```

## 2 - flex-wrap

### Exercício 1
```
display: flex;
flex-wrap: wrap;
```

### Exercício 2
```
display: flex;
flex-wrap: wrap-reverse;
```
## 3 - justify-content

### Exercício 1
```
display: flex;
```

### Exercício 2
```
display: flex;
justify-content: flex-end;
```

### Exercício 3
```
display: flex;
justify-content: center;
```

### Exercício 4
```
display: flex;
justify-content: space-between;
```

### Exercício 5
```
display: flex;
justify-content: space-around;
```

### Exercício 6
```
display: flex;
justify-content: space-evenly;
```

## 4 - align-items

### Exercício 1
```
display: flex;
```

### Exercício 2
```
display: flex;
align-items: flex-start
```

### Exercício 3
```
display: flex;
align-items: flex-end;
```

### Exercício 4
```
display: flex;
align-items: center;
```

### Exercício 5
```
display: flex;
align-items: baseline
```

## 5 - align-content

### Exercício 1
```
display: flex;
flex-wrap: wrap;
```

### Exercício 2
```
display: flex;
flex-wrap: wrap;
align-content: flex-start;
```

### Exercício 3
```
display: flex;
flex-wrap: wrap;
align-content: flex-end;
```

### Exercício 4
```
display: flex;
flex-wrap: wrap;
align-content: center;
```

### Exercício 5
```
display: flex;
flex-wrap: wrap;
align-content: space-between;
```

### Exercício 6
```
display: flex;
flex-wrap: wrap;
align-content: space-around;
```

### Exercício 7
```
display: flex;
flex-wrap: wrap;
align-content: space-evenly;
```

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

## 4 - Ao redimensionar a página quando o espaço do nav não couber o campo e as opções, deverá haver uma quebra de linha.

```css
nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
```

## 5 - Centralize a lupa do campo de pesquisa para que fique exatamente no centro do quadrado.

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

## 7 - Distribua o espaço livre igualmente entre as seções.

```css
article {
  display: flex;
  justify-content: space-evenly;
}
```

## 8 - Caso a página seja redimensionada e o espaço seja insuficiente deverá haver quebra de linha nas seções.

```css
article {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
```

## 9 - Alinhe o conteúdo das seções ao centro horizontal.
Dica: O valor padrão para 'flex-direction' é 'row' e para 'align-items' é 'stretch'.

```css
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

## 10 - Use o flexbox para colocar um espaçamento vertical entre o título e os links do aside. O espaço acima do título e abaixo da lista de links deverá ser menor que o espaço entre eles.

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
