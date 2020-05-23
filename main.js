'use strict';
window.onload=function(){
  //コンストラクタ作成
  function Card(suit,num){
    this.suit=suit;
    this.num=num;

    //以下を追記
    this.front;
    this.setFront=function(){
      this.front=`${this.card_}${this.suit}${this.num<10?'0':''}${this.num.png}`;
    };
  }
  //カード配列作成
  const cards=[];
  const suits=['spade_','diamond_','heart_','club_'];
  for(let i=0;i<suits.length;i++){
    for(let j=1;j<=13;j++){
      let card=new Card(suits[i],j);
      card.setFront();
      cards.push(card);
    }
  }
  //テーブル作成
  const table=document.getElementById('table');
  for(let i=0;i<suits.length;i++){
    let tr=document.createElement('tr');
    for(let j=0;j<13;j++){
      let td=document.createElement('td');
      let tempCard=cards[i*13+j];
      td.classList.add('card');
      td.style.backgroundImage=`url(images/{tempCard.front})`;
      //td.textContent=`${tempCard.suit}:${tempCard.num}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
