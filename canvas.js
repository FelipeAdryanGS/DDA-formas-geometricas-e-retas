var canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); 

for(var quadrados=0,altura=60,comprimento=60,posx,posy; quadrados<10;quadrados++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    c.fillStyle = 'orange';
    c.fillRect( posx, posy,altura,comprimento); 
    console.log(`Total de quadrados:${quadrados}`)
}

for(var circulos=0,posx,posy; circulos<10;circulos++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    c.beginPath()/
    c.arc(posx, posy,30,0, Math.PI*2,false)
    c.fillStyle = 'Yellow'
    c.fill()
    console.log(`Total de círculos:${circulos}`) 
}

for(var retas=0; retas<10;retas++){
    c.beginPath(); 
    c.moveTo(Math.random() * canvas.width,Math.random() * canvas.height); //início da linha
    c.lineTo(Math.random() * canvas.width,Math.random() * canvas.height); // fim da linha
    c.strokeStyle = 'White'
    c.stroke()/
    console.log(`Total de retas:${retas}`)
 }
 
