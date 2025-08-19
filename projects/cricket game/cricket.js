let scoreStr = localStorage.getItem('score');
  let score;
  resetScore (scoreStr);

  function resetScore(scoreStr) {

    score =  scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    lost : 0,
    tie : 0,
  };

  score.displayScore = function(){
      return ` Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`
    };

    showResult();
  }
  
  alert('How the game works : Bat defeats Ball , Ball defeats Stump , Stump defeats Bat');

  
  let computerChoicemsg;
  function generateComputerChoice(){
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1)
    {
      computerChoicemsg = 'computer choice is Bat';
     return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2)
    {
    computerChoicemsg = 'computer choice is Ball';
    return 'Ball';
    } else {
    computerChoicemsg = 'computer choice is Stump';
    return 'Stump';
    }
    }

    function GetResult(computerMove , userMove){

      if (userMove === 'Bat'){

      if (computerMove === 'Ball') {
        score.win++;
        return 'You won.';
      } else if (computerMove === 'Bat')
      {
        score.tie++;
        return `It's a tie`;
      }
      else {
        score.lost++;
        return 'Computer won.';
      } 

      }

      else if (userMove === 'Ball'){
      if (computerMove === 'Bat')
      {
        score.lost++;
        return 'Computer won.';
      } else if (computerMove === 'Ball')
      {
        score.tie++;
        return `It's a tie`;
      }
      else {
        score.win++;
        return 'You won.';
      }
      }

      else {
        if (computerMove === 'Bat')
        {
          score.win++;
          return 'You won.';
        } else if (computerMove === 'Ball')
        {
          score.lost++;
          return 'Computer won.';
        } else 
        {
          score.tie++;
        return `It's a tie`;
        }
        }
        }
        console.log(score);

        function showResult (userMove, computerMove, result){

         localStorage.setItem('score' , JSON.stringify(score));

         document.querySelector('#user-move').innerText = 
            userMove == undefined ? '' : `You have chosen ${userMove}`;

         document.querySelector('#computer-move').innerText =
            computerMove == undefined ? '' : `Computer choice is ${computerMove}`;

         document.querySelector('#result').innerText =
             result == undefined ? '' : result;

         document.querySelector('#score').innerText = score.displayScore();

}