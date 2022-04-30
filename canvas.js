var canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvasjr = canvas.getContext('2d'); 

function gerar_cor_hexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3, '0');
}

for(var quadrados=0,altura=60,comprimento=60,localizacaox,localizacaoy; quadrados<10;quadrados++){ // Desafio 1 ; 10 quadrados
    localizacaox = Math.random()*canvas.width //Desafio 2 ,  posicao aleatoria
    localizacaoy = Math.random()*canvas.height//Desafio 2 , posicao aleatoria
    canvasjr.fillStyle = gerar_cor_hexadecimal(); // Desafio 3 , cor aleatoria
   canvasjr.fillRect(localizacaox, localizacaoy ,altura,comprimento); 
}

for(var circulos=0,localizacaox,llocalizacaoy; circulos<30;circulos++){ // Desafio 1 ; 30 circulos
    localizacaox = Math.random()*canvas.width //// Desafio 2  ,posicao aleatoria
    localizacaoy = Math.random()*canvas.height////Desafio 2 , posicao aleatoria
    canvasjr.beginPath()/
    canvasjr.arc(localizacaox, localizacaoy , Math.random()*30 ,0, Math.PI*2,true); //Desafio 4 , tamanho dos ciculos
    canvasjr.fillStyle = gerar_cor_hexadecimal(); // Desafio 3 , cor aleatoria
    canvasjr.fill()
}

for(var retas=0; retas<10;retas++){  //Desafio 1 ; 10 retas
    canvasjr.beginPath(); 
    canvasjr.moveTo(Math.random() * canvas.width,Math.random() * canvas.height); //Desafio 2 , posicao aleatoria
    canvasjr.lineTo(Math.random() * canvas.width,Math.random() * canvas.height); // Desafio 2 , posicao aleatoria
    canvasjr.strokeStyle = gerar_cor_hexadecimal(); //Desafio 3 , cor aleatoria
    canvasjr.stroke()
}
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//// Estrela////

canvasjr.fillStyle = gerar_cor_hexadecimal();
    localizacaoy = Math.random()*canvas.height
 canvasjr.beginPath();
canvasjr.moveTo(108,0.0);
 canvasjr.lineTo(141, 70);
 canvasjr.lineTo(218, 78.3);
 canvasjr.lineTo(162, 131);
canvasjr.lineTo(175, 205);
 canvasjr.lineTo(108, 170);
 canvasjr.lineTo(41.2, 205);
 canvasjr.lineTo(55, 131);
 canvasjr.lineTo(1, 78);
 canvasjr.lineTo(75, 68);
 canvasjr.lineTo(108, 0);
 canvasjr.closePath();
 canvasjr.fill();
 

//////// coracao ////////

canvasjr.fillStyle = gerar_cor_hexadecimal();
     canvasjr.beginPath();
      canvasjr.moveTo(75,40);
     canvasjr.bezierCurveTo(75,37,70,25,50,25);
     canvasjr.bezierCurveTo(20,25,20,62.5,20,62.5);
      canvasjr.bezierCurveTo(20,80,40,102,75,120);
      canvasjr.bezierCurveTo(110,102,130,80,130,62.5);
      canvasjr.bezierCurveTo(130,62.5,130,25,100,25);
      canvasjr.bezierCurveTo(85,25,75,37,75,40);
      canvasjr.fill();


      
      /////////// Batman ///////////





      canvasjr.transform( 1 , 0 , 0 , -1 , canvas.width * 0.5 , canvas.height * 0.5 ); // more info at https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
canvasjr.save( ); // stores canvas state - importantly it saves the direction of y-axis increasing

/* mark the origin for reference */
canvasjr.fillStyle = 'white';
canvasjr.fillRect( -2 , -2 , 4 , 4 );

/* marks a simple axis */
canvasjr.beginPath( );
canvasjr.moveTo( canvas.width * -0.5, 0 );
canvasjr.lineTo( canvas.width * 0.5, 0 );
canvasjr.moveTo( 0, canvas.width * -0.5 );
canvasjr.lineTo( 0, canvas.width * 0.5 );
canvasjr.strokeStyle = '#F5F5F5';
canvasjr.stroke( );

/* draw author watermark text on canvas */
canvasjr.scale( 1, -1 ); // makes y-axis increasing downwards so text can be written upright
canvasjr.font = '20px Arial';
var authorName = 'Felipe Adryan 😼'; 
var authorNameMeasured = canvasjr.measureText( authorName );
canvasjr.fillStyle = "White"; // design by day white
canvasjr.textBaseline = 'bottom'; // allows to be manpulated from bottom-left
canvasjr.fillText( authorName, ( authorNameMeasured.width * -0.5 ), ( canvas.height * 0.5 - 25 ) ); // positions author attribute
canvasjr.restore( ); // makes y-axis increasing upwards again

/* define the pencil properties */
var pencil = {
  'thickness': 1, // thickness of line
  'color': {
    'white': 'white',
    'white': 'white',
    'white': 'white',
    'white': 'white',
    'white': 'white',
    'white': 'white',
    'white': 'white'
  }
};

/* customise output */
a = 40; // bat-scale (batman logo scale) or known as arbitary constant in mathematics

var graph = {
  'step': 0.5, // decrease step value to get greater points plotted but will cause browser lag due to increase in number of calculations 0.1 gives best result
  plot: function( curveObject ) {
      /* equation is drawn via an interation method - same concept as plotting known coordinates on a graph */
      canvasjr.beginPath( );
      canvasjr.lineWidth = pencil.thickness;
      canvasjr.strokeStyle = curveObject.pencilColor; // allows stroke to have a custom color
      for( var i = curveObject.lowerLimit ; i <= curveObject.upperLimit ; i += this.step  ) {

        switch( curveObject.inequalityFor ) {

          case 'x_axis':
            canvasjr.lineTo( i , curveObject.func( i ) ); // i is the x-coordinate as y = f(x)
            break;

          case 'y_axis':
            canvasjr.lineTo( curveObject.func( i ) , i ); // i is the y-coordinate as x = f(y)
            break;

          default:
            console.log( 'Curve object is missing inequalityFor property or has a value other than x_axis and y_axis' );

        };
          canvasjr.stroke( );
    };
  },
  clear: function( ) {
    /* clears the canvas if needed */
      canvasjr.clearRect( canvas.width * -0.5 , canvas.height * -0.5 , canvas.width , canvas.height );
  }
};

/* I was thinking about creating new objects to acheive the same result more efficiently and minifying code */

var curve_1 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.white
};

var curve_2 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.white
};

var curve_3 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( -( ( ( 3 * Math.sqrt( 33 ) ) - 7 ) * Math.pow( x , 2 ) ) / ( 112 * Math.pow( a , 2 ) ) + ( Math.abs( x / a ) / 2) + ( Math.sqrt( 1 - ( Math.pow( ( Math.abs( Math.abs( x / a ) - 2 ) - 1 ) , 2 ) ) ) ) - 3 );
  },
  'lowerLimit': -4 * a,
  'upperLimit': 4 * a,
  'pencilColor': pencil.color.white
};

var curve_4 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': 0,
  'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
  'pencilColor': pencil.color.white
};

var curve_5 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': 0,
  'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
  'pencilColor': pencil.color.white
};

var curve_6 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
  },
  'lowerLimit': 0.75 * a,
  'upperLimit': a,
  'pencilColor': pencil.color.white
};

var curve_7 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
  },
  'lowerLimit': -a,
  'upperLimit': -0.75 * a,
  'pencilColor': pencil.color.white
};

var curve_8 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 3 * a * ( Math.abs( x / a ) + 0.25 );
  },
  'lowerLimit': 0.5 * a,
  'upperLimit': 0.75 * a,
  'pencilColor': pencil.color.white
};

var curve_9 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 3 * a * ( Math.abs( x / a ) + 0.25 );
  },
  'lowerLimit': -0.75 * a,
  'upperLimit': -0.5 * a,
  'pencilColor': pencil.color.white
};

var curve_10 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 2.25 * a;
  },
  'lowerLimit': -0.5 * a,
  'upperLimit': 0.5 * a,
  'pencilColor': pencil.color.white
};

var curve_11 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
  },
  'lowerLimit': a,
  'upperLimit': 3 * a,
  'pencilColor': pencil.color.white
};

var curve_12 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
  },
  'lowerLimit': -3 * a,
  'upperLimit': -a,
  'pencilColor': pencil.color.white
};

function drawBatLogo( curveArray ) {
  /* call draw method of graph object to outpout curves on canvas */
  for( var i = 0; i < curveArray.length; i++ ) {
    graph.plot( curveArray[i] );
  };
};

drawBatLogo( [curve_1, curve_2, curve_3, curve_4, curve_5, curve_6, curve_7, curve_8, curve_9, curve_10, curve_11, curve_12] );

// A estrela com o coracao nao vai de jeito nenhum 
  