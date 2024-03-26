---
date: 2024-03-24
title: New features
mermaid: true
mathjax: true
---

### support mermaid

Use: 
+ start with **```mermaid**
+ end with **```**
+ set markdown frontmatter `mermaid: true`.

Mermaid Code:

```code title="mermaid.md"
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```

Result: 

```mermaid
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```

### Support Mathjax

+ set markdown frontmatter `mathjax: true`.

```yaml title="Mathjax.md"
---
mathjax: true
---
$$ \displaystyle\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $$
```

$$ \displaystyle\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t $$

### Code folding is supported by default

```js
var myArr = [1,2]
console.log(myArr)

var myObj = {a: 1, b: 2}

for(let key of myArr){
  console.log(key)
}

var it = myArr[Symbol.iterator]()
it.next() // {value: 1, done: false}

// VM704:12 Uncaught TypeError: myObj is not iterable
for(let key of myObj){
  console.log(key)
}

```