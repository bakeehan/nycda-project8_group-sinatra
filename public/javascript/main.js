var wrapper=document.getElementById('wrapper')
var addNote=document.getElementById('addNote')
var deleteNote=document.getElementById('deleteNote')
var createDate=document.getElementById('createDate')
var createNote=document.getElementById('createNote')
var colorPicker=document.getElementById('colorPicker')
var wrapperChildren=wrapper.children;
var dates=document.getElementById('dates')

var notes=[]

function Notes1(date, info){
  this.date=date
  this.info=info

}

function construct(){
  notes.push(new Notes1(createDate.value, createNote.value))
}


function create(){
  var list=document.createElement("div")
  list.style.fontWeight="normal"
  list.style.backgroundColor=colorPicker.value
  list.style.margin="10px"
  list.style.padding="10px"
  list.style.width="300px"
  list.style.wordWrap="break-word"
  list.style.height="300px"
  list.style.position="relative"
  list.className="list"
  list.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  list.style.padding="10px"
  list.style.float="left"
  list.innerHTML="<span class='exits' id='" + [notes.length-1] + "'>X</span><span id='dates'>" + notes[notes.length-1].date + "</span><p>" + "<span id='noted'><u>Reminder:</u><br id='breaks'>" + notes[notes.length-1].info + "</span>"
  wrapper.appendChild(list)


  var exits = document.getElementsByClassName("exits");

  function clickExit(clicked) {
    clicked.remove()
  }

for(i=0;i<exits.length;i++){
    exits[i].addEventListener("click", function(event){
      clickExit(event.path[1]);
      console.log(event)

    })
  }

}


addNote.addEventListener("click", function(){
  construct()
  create()
})

deleteNote.addEventListener("click", function(){
  for(i=0;i<wrapperChildren.length;i++){
    if(wrapperChildren[i].style.fontWeight=="bold"){
      wrapperChildren[i].remove()
      i--
    }
  }
})
