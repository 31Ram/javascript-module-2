
document.querySelector("#blueBtn").addEventListener( "click", ()=>{change("blueBtn")});
document.querySelector("#orangeBtn").addEventListener( "click", ()=>{change("orangeBtn")});
document.querySelector("#greenBtn").addEventListener( "click", ()=>{change("greenBtn")});

change=(btn)=>{
  let jumBotron = document.querySelector(".Jumbotron");
  let buttons = document.querySelectorAll(".buttons a");

  let donate = buttons[0];
  let volunteer = buttons[1];

  switch(btn) {
    case 'blueBtn':
      jumBotron.style.backgroundColor = `#588fbd`;
      donate.style.backgroundColor = `#ffa500`;
      volunteer.style.backgroundColor = `black`;
      volunteer.style.color = `white`;
      break;

    case 'orangeBtn':
      jumBotron.style.backgroundColor = `#f0ad4e`;
      donate.style.backgroundColor = `#5751fd`;
      volunteer.style.backgroundColor = `#31b0d5`;
      volunteer.style.color = `white`;
      break;

    case 'greenBtn':
      jumBotron.style.backgroundColor = `#87ca8a`;
      donate.style.backgroundColor = `black`;
      volunteer.style.backgroundColor = `#8c9c08`;
      break;

  }

}