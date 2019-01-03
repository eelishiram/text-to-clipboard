var copyCB = (text) => {
    var dummy = document.createElement("textarea");

    // Add it to the document
    document.body.appendChild(dummy);
  
    // Set its ID
    dummy.setAttribute("id", "dummy_id");
  
    // Output the array into it
    document.getElementById("dummy_id").value=text;
  
    // Select it
    dummy.select();
  
    // Copy its contents
    document.execCommand("copy");
  
    // Remove it as its not needed anymore
    document.body.removeChild(dummy);

}

exports.copyCB = copyCB;