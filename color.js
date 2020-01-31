	var colors = generateRandomColors(6);
    var h1 = document.querySelector("h1");
	var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor();
	var messageDisplay = document.querySelector("#message");
    var resetButton =  document.querySelector("#reset");
    var easyBtn = document.querySelector("#easyBtn");
    var hardBtn = document.querySelector("#hardBtn");
    var size = 3;
    
    easyBtn.addEventListener("click",function(){
    	hardBtn.classList.remove("selected");
    	easyBtn.classList.add("selected");
        colors = generateRandomColors(3);
        size = 3;
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++)
        {
     	  if(i<3)
     	  squares[i].style.backgroundColor = colors[i];
          else
          squares[i].style.backgroundColor = "#232323";	
        }	
    h1.style.backgroundColor = "steelblue";
    });
    hardBtn.addEventListener("click",function(){
    	easyBtn.classList.remove("selected");
    	hardBtn.classList.add("selected");
        colors = generateRandomColors(6);
        size = 6;
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < colors.length; i++)
        {
     	  squares[i].style.backgroundColor = colors[i];
        }	
    h1.style.backgroundColor = "steelblue";
    });
    resetButton.addEventListener("click",function(){
     messageDisplay.textContent = "";
     this.textContent = "New color";
     colors = generateRandomColors(size);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for(var i = 0; i < squares.length; i++)
     {
     	squares[i].style.backgroundColor = colors[i];
      }
    h1.style.backgroundColor = "steelblue";
    });
	for(var i = 0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	    squares[i].addEventListener("click",function(){
	    var clickedColor = this.style.backgroundColor;
	    
	    if(clickedColor == pickedColor){
	          changeColors(clickedColor); 
	          resetButton.textContent = "Play Again?";
	          h1.style.backgroundColor = pickedColor;  	
	    	  messageDisplay.textContent = "Correct!!";
	    	}
	    else{
	        this.style.backgroundColor = "#232323";
	        messageDisplay.textContent = "Try again";
	    }
             	    
	    });
	}
	function changeColors(color)
	{
		for(var i = 0; i<colors.length; i++)
	       {
	       	squares[i].style.backgroundColor = color;
	       }
	}
	function pickColor() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
		
	}
	var colorDisplay = document.querySelector("#colorDisplay");
	colorDisplay.textContent = pickedColor;
    function generateRandomColors(num)
    {
      var arr = [];
      for(var i = 0; i < num; i++)
      {
          arr.push(randomColor());
      }
      return arr;
    }
    function randomColor()
    {
    	var r = Math.floor(Math.random()* 256);
        var g = Math.floor(Math.random()* 256);
        var b = Math.floor(Math.random()* 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";  
    }