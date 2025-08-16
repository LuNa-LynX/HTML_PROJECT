function generatePattern(n, type) {
  let pattern = "";

  switch (type) {
    case "triangle":
      for (let i = 1; i <= n; i++) {
        pattern += "* ".repeat(i) + "\n";
      }
      break;

    case "pyramid":
      for (let i = 1; i <= n; i++) {
        pattern += " ".repeat(n - i) + "* ".repeat(i) + "\n";
      }
      break;

    case "inverted":
      for (let i = n; i >= 1; i--) {
        pattern += "* ".repeat(i) + "\n";
      }
      break;
    
case "numPyramid":
      for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        let numbers = "";
        for (let j = 1; j <= i; j++) {
          numbers += j + " ";
        }
        pattern += spaces + numbers.trim() + "\n";
      }
      break;

    case "numbers":
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
          pattern += j + " ";
        }
        pattern += "\n";
      }
      break;


    case "square":
     for (let i = 1; i <= n; i++) {
     pattern += "* ".repeat(n).trim() + "\n";
     }
    break;
    
    case "hollowInverted":
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      if (i === n || j === 1 || j === i) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
  break;


    default:
      pattern = "Invalid pattern type.";
  }

  return pattern;
}

document.getElementById("generateBtn").addEventListener("click", function () {
  const rows = parseInt(document.getElementById("rows").value);
  const type = document.getElementById("patternType").value;
  const outputElement = document.getElementById("output");

  outputElement.textContent = ""; // Clear previous output

  if (isNaN(rows)) {
    alert(" Please enter a valid number.");
  } else if (rows < 1 || rows > 9) {
    alert("Please enter a number between 1 and 9.");
  } else {
    const output = generatePattern(rows, type);
    outputElement.textContent = output;
  }
});


//document.getElementById("generateBtn").addEventListener("click", function () {
  //const rows = parseInt(document.getElementById("rows").value);
  //const type = document.getElementById("patternType").value;
  /*const color = document.getElementById("colorPicker").value;
  const outputElement = document.getElementById("output");

  outputElement.textContent = ""; // Clear previous output

  if (isNaN(rows)) {
    alert("🚫 Please enter a valid number.");
  } else if (rows < 1 || rows > 9) {
    alert("⚠️ Please enter a number between 1 and 9.");
  } else {
    const output = generatePattern(rows, type);
    outputElement.textContent = output;
    outputElement.style.color = color; // Apply selected color
  }
});*/ 
