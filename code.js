window.onload = function() {
    const converter = document.getElementById("converter");
    const result = document.getElementById("result");
  
    converter.addEventListener("click", function() {
      const Input = document.getElementById("Input").value;
      const type = document.getElementById("type").value;
  
      if (Input === "" || isNaN(Input)) {
        result.innerText = "Invalid input";
      } else {
        let convertedTemperature;
        let convertedUnit;
  
        if (type === "celsius") {
          convertedTemperature = (Input * 9/5) + 32;
          convertedUnit = "Fahrenheit";
        } else if (type === "fahrenheit") {
          convertedTemperature = (Input - 32) * 5/9;
          convertedUnit = "Celsius";
        } 
        result.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
      }
    });
  };