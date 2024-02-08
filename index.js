const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável que não pode ser altera em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função que é chamada quando queremos imprimir algo no console?",
      respostas: [
        "log()",
        "print()",
        "display()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método de array é utilizado para adicionar um elemento no final do array?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador utilizado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o tipo de dado que representa valores lógicos em JavaScript?",
      respostas: [
        "string",
        "boolean",
        "number",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método `toUpperCase()` faz em uma string?",
      respostas: [
        "Converte todos os caracteres para minúsculas",
        "Converte todos os caracteres para maiúsculas",
        "Inverte a ordem dos caracteres",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "||",
        "&&",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "<!-- Comentário -->",
        "/* Comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão `3 + '3'` em JavaScript?",
      respostas: [
        "33",
        "6",
        "Error",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método que pode ser usado para encontrar o tamanho de uma string em JavaScript?",
      respostas: [
        "size()",
        "length()",
        "length",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }