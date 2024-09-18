const highScoresList = document.querySelector('#highScoresList')
const highScoore = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML=highScores.map(Score=>{
    return <li class="high-score">
        ${score.name} - $(score.score)
    </li>
}).join('')