'use strict';
window.onload=function(){
  function Card(suit,num){
    this.suit=suit;
    this.num=num;
    //以下を追記
    this.front;
    this.setFront=function(){
      this.front=`card_${this.suit}${this.num<10?'0':''}${this.num}.png`;
    };
  }

  const cards=[];
  const suits=['spade_','diamond_','heart_','club_'];
  for(let i=0;i<suits.length;i++){
    for(let j=1;j<=13;j++){
      let card=new Card(suits[i],j);
      //以下を追加
      card.setFront();
      cards.push(card);
    }
  }

  function shuffle(){
    let i=cards.length;
    while(i){
      let index=Math.floor(Math.random()*i--);
      var temp=cards[index];
      cards[index]=cards[i];
      cards[i]=temp;
      
    }
  }

  shuffle();
  const table=document.getElementById('table');
  for(let i=0;i<suits.length;i++){
    let tr=document.createElement('tr');
    for(let j=0;j<13;j++){
      let td=document.createElement('td');
      let tempCard=cards[i*13+j];
      //以下を追記
      td.classList.add('card','back');
      td.onclick=flip;
      td.style.backgroundImage=`url(images/${tempCard.front})`;

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }



function flip(e){
  let td=e.target;
  td.classList.toggle('back');
}
}

