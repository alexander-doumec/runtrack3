function citation() {
   let citationElement = document.getElementById('citation');
   let texteCitation = citationElement.textContent;
   console.log(texteCitation)
}

document.getElementById('button').addEventListener('click', citation);