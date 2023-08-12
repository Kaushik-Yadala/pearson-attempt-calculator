function trueOrFalseQuestion() {
  document.getElementById("attempts-per-part").innerHTML = 'number of attempts: ' + 1;
  document.getElementById("parts").innerHTML = '';
  document.getElementById("attempts-per-frq").innerHTML = '';
  document.getElementById("percent-lost").innerHTML = 'percent lost per attempt: ' + 100 + '%';
}

function MCQOneChoice(numberOfOptions) {
  let numberOfAttempts = numberOfOptions - 1;
  let percentLost = (100 / numberOfAttempts).toFixed(2);
  document.getElementById("attempts-per-part").innerHTML = 'number of attempts: ' + numberOfAttempts;
  document.getElementById("parts").innerHTML = 'number of choices: '+numberOfOptions;
  document.getElementById("attempts-per-frq").innerHTML = '';
  document.getElementById("percent-lost").innerHTML = 'percent lost per attempt: ' + percentLost + '%';
}

function FRQ(numberOfParts) {
  let numberOfAttempts = 4;
  let percentLost = ((100 / numberOfParts) / numberOfAttempts).toFixed(2);
  document.getElementById("parts").innerHTML = 'number of parts: ' + numberOfParts;
  document.getElementById("attempts-per-part").innerHTML = 'number of attempts per part: ' + numberOfAttempts;
  document.getElementById("attempts-per-frq").innerHTML = 'number of attempts whole FRQ: ' + (numberOfAttempts * numberOfParts);
  document.getElementById("percent-lost").innerHTML = 'percent lost per attempt: ' + percentLost + '%';
}

function enableFields() {
  if (document.getElementById("typeQuestion").value === "MCQ1ans") {
    document.getElementById("numChoices").disabled = false;
    document.getElementById("numParts").disabled = true;
    document.getElementById("numParts").value = '';
  }
  else if (document.getElementById("typeQuestion").value === "FRQ") {
    document.getElementById("numChoices").disabled = true;
    document.getElementById("numChoices").value = '';
    document.getElementById("numParts").disabled = false;
  }else {
    document.getElementById("numChoices").disabled = true;
    document.getElementById("numParts").disabled = true;
    document.getElementById("numChoices").value = '';
    document.getElementById("numParts").value = '';
  }
}

function calculate(){
  let selector = document.getElementById("typeQuestion").value;
  let parts = parseInt(document.getElementById("numParts").value);
  let choice = parseInt(document.getElementById("numChoices").value);

  if (selector === "MCQ1ans") {
    MCQOneChoice(choice);
  }
  else if (selector === "FRQ") {
    FRQ(parts);
  }else {
    trueOrFalseQuestion();
  }

  document.getElementById("numParts").value = '';
  document.getElementById("numChoices").value = '';
}
