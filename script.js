 score = 0;
 cross = true;

 audio = new Audio('music.mp3');
 audiogo = new Audio('gameover.mp3');
 setTimeout(() => {
      audio.play()
 }, 1500)
 document.onkeydown = function(e){
     console.log("Key code is: ",e.keyCode)
     if(e.keyCode==38){
        tom = document.querySelector('.tom');
        tom.classList.add('animateTom');
        setTimeout(() => {
            tom.classList.remove('animateTom')
        }, 500);
     }
     if(e.keyCode==39){
        tom = document.querySelector('.tom');
        tomX = parseInt(window.getComputedStyle(tom,null).getPropertyValue('left'));
        tom.style.left = tomX + 70 + "px";
    }
    if(e.keyCode==37){
        tom = document.querySelector('.tom');
        tomX = parseInt(window.getComputedStyle(tom,null).getPropertyValue('left'));
        tom.style.left = tomX - 70 + "px";
    }
 }
 

 setInterval(() => {
      tom = document.querySelector('.tom');
      gameOver = document.querySelector('.gameOver');
      obstacle = document.querySelector('.obstacle');

      tx = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
      ty = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));

      ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
      oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

      offsetX = Math.abs(tx-ox);
      offsetY = Math.abs(ty-oy);

      //console.log(offsetX,offsetY)
      if(offsetX<130 && offsetY<100){
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() =>{
            audiogo.pause();
            audio.pause();
        }, 3000);
        
      }
      else if(offsetX<200 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross= true;
        },1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.01;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
        
      }


 }, 10);

 function updatescore(score){
    scoreCount.innerHTML = "Your Score: " + score
 }