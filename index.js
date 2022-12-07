  function changeChar() {
    const input = document.getElementById("input").value;
    let output = "";
    for(i = 0; i < input.length; i++ ) {
      output += input.charCodeAt(i) + 3 + ",";
    };
    document.getElementById("output").value = output;
  };
