let todoele = document.getElementById("taskinfo");
let tasklist = document.getElementById("tasklist");

document.getElementById("add").onclick = function () {
  if (todoele.value.length == 0) {
    alert("Enter a new Task ");
  } else {
    tasklist.innerHTML =
      tasklist.innerHTML +
      ` <div class="task">
        <span id="work">${todoele.value}</span>
        <button class="del"><img src="bin.png"></button>
        </div>
        `;
    let alltasks = document.querySelectorAll(".del");
    // for (i = 0; i < alltasks.length; i++) {
    //   alltasks[i].onclick = function () {
    //     this.parentNode.remove();
    //   };
    // }
    // todoele.value = "";
  }
};
//hello 
sdjkch
dcsdcsd
//

/*hhee
eee
e
e

eeee
e
*/