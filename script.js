
    function createFlowers() {
    console.log("creating flowers...");
        const container = document.getElementById('flower-container');
        if(!container){
            console.error("Flower container not found");
            return;
        }
        for (let i = 0; i < 100; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower', 'fall');
            flower.textContent = '🌺','🌸';
            flower.style.left = Math.random() * 100 + '%';
            flower.style.fontSize = Math.random() * 20 + 10 + 'px';
            flower.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(flower);
        }
        console.log('Flowers created');
    }
    document.addEventListener('DOMContentLoaded', createFlowers);
    document.getElementById("finally-btn").addEventListener('click',function()
    {
        window.open("happy dasara.jpg",'_blank');
    });

    