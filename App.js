function dbx(a){
    let btns = document.querySelectorAll(".oneline button");
    for(let i=0;i<btns.length;i++){
        btns[i].style.backgroundColor = "yellow";
    }
    a.style.backgroundColor = "yellowgreen";
  var rem = document.getElementsByClassName('remove');
  for (var p = 0;p<rem.length;p++){
    rem[p].remove();
  }
  document.querySelector(".parent").innerHTML = "";
  
  let pro = fetch(`https://inshorts.deta.dev/news?category=${a.value}`).then((reponse) => {
    // console.log(reponse.status)
    // console.log(reponse.ok)
    return reponse.json()
  }).then((value) => {
    var s = value.data;
    for (var i =0; i < s.length; i++) {
      var auth = s[i].author;
      var content = s[i].content;
      var id = s[i].id;
      filling(auth, content, id);
    }
    // let catgry = document.querySelectorAll(".right");
    // for(let i=0;i<catgry.length;i++){
    //   catgry[i].innerHTML = "Category: "+"<span class='left'>"+a.innerText+"</span>";
    // }
  });

  var parent = document.querySelector('.parent');
  function filling(auth, content, id){
    // console.log(auth);
    // console.log(content);
    var span = document.createElement('span');
    var span1 = document.createElement('span');
    var p = document.createElement('p');
    var div = document.createElement('div');
    var l = document.createElement('i');
    var apid = document.createElement('span');
    apid.setAttribute("class","apid");
    l.setAttribute('class','fa-solid fa-heart myicon');
    l.setAttribute('onclick','saved(this)');
    div.setAttribute('class', 'textarea remove');
    span1.setAttribute('class', 'right');
    div.appendChild(span);
    div.appendChild(span1);
    div.appendChild(p);
    div.appendChild(l);
    div.appendChild(apid);
    parent.appendChild(div);
    // document.querySelector(".right").innerHTML = "Category: "+"<span class='left'>"+a.innerHTML+"</span>";
    span.innerHTML = "Author: "+"<span class='left'>"+auth+"</span>";
    span1.innerHTML = "Category: "+"<span class='left'>"+a.innerText+"</span>";
    apid.innerHTML = id;
    p.innerHTML = content;
  }
}
var w =0;
function saved(a){
  localStorage.setItem(a.parentElement.querySelector(".apid").innerText,a.parentElement.innerHTML);
  var data = document.querySelector('.stored')

  var x = a.parentNode;
  data.appendChild(x);
  console.log(x);
  
}

function storedNews(){
  if(document.querySelector(".stored").innerText == ""){
    for(let i=0;i<localStorage.length;i++){
      let div = document.createElement('div');
      div.setAttribute("class","textarea remove");
      div.innerHTML=localStorage.getItem(localStorage.key(i));
      document.querySelector(".stored").appendChild(div);
    }
  }
}  

