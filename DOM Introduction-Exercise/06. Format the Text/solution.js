function solve() {

  const inputEl = document.querySelector('#input')
  const outputEl = document.querySelector('#output')

  if(inputEl.value == '') return

  // Split input text by periods, trimming excess whitespace
  const inputTextArr = inputEl.value.split('.').filter(sentence => sentence.trim() !== '');

  let paragraphsArr = []
  for(let i = 0; i < inputTextArr.length; i+=3){

    let paragraphBuffer = ''
    let frstSentence = inputTextArr[i] ? inputTextArr[i].trim() : '';
    let scndSentence = inputTextArr[i + 1] ? inputTextArr[i + 1].trim() : '';
    let thrdSentence = inputTextArr[i + 2] ? inputTextArr[i + 2].trim() : '';

    if(frstSentence) paragraphBuffer += frstSentence+'.'
    if(scndSentence) paragraphBuffer += scndSentence+'.'
    if(thrdSentence) paragraphBuffer += thrdSentence+'.'
    paragraphsArr.push(paragraphBuffer.trim())
  }

  // Clear previous output
  outputEl.innerHTML = '';

  for(let paragraph of paragraphsArr){

    let htmlEl = `<p>${paragraph}</p>`
    outputEl.innerHTML += htmlEl
  }
}