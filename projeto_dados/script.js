function rollDice() {
    // Valores para o primeiro dado (6, 12, 18, 24, 30, 36)
    const dice1Values = [
        { x: 0, y: 0, value: 6 },       // Frente
        { x: 0, y: 180, value: 12 },    // Parte de trás
        { x: 0, y: 90, value: 18 },     // Lado direito
        { x: 0, y: -90, value: 24 },    // Lado esquerdo
        { x: -90, y: 0, value: 30 },    // Parte de cima
        { x: 90, y: 0, value: 36 }      // Parte de baixo
    ];
    
    // Valores para o segundo dado ("Metade", "Terça parte")
    const dice2Values = [
        { x: 0, y: 0, value: 'Metade' },           // Frente
        { x: 0, y: 180, value: 'Metade' },         // Parte de trás
        { x: 0, y: 90, value: 'Metade' },          // Lado direito
        { x: 0, y: -90, value: 'Terça parte' },    // Lado esquerdo
        { x: -90, y: 0, value: 'Terça parte' },    // Parte de cima
        { x: 90, y: 0, value: 'Terça parte' }      // Parte de baixo
    ];

    // Escolhe uma rotação aleatória para o primeiro dado
    const dice1Roll = dice1Values[Math.floor(Math.random() * dice1Values.length)];
    const dice1 = document.getElementById('dice1');
    dice1.style.transform = `rotateX(${dice1Roll.x}deg) rotateY(${dice1Roll.y}deg)`;

    // Escolhe uma rotação aleatória para o segundo dado
    const dice2Roll = dice2Values[Math.floor(Math.random() * dice2Values.length)];
    const dice2 = document.getElementById('dice2');
    dice2.style.transform = `rotateX(${dice2Roll.x}deg) rotateY(${dice2Roll.y}deg)`;
}
