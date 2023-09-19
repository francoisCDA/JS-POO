
const listeCourses = document.getElementById('listeCourses');
const itemCourse = document.getElementById('itemCourse');
const btnAdd = document.getElementById('btnAdd');
const btnClear = document.getElementById('btnClear');


btnAdd.setAttribute("onclick","btnAddAdd()");
btnClear.onclick = () => { reset() };



let maListDeCourse = localStorage.getItem('listCourse');
let compt ;


if (!maListDeCourse) {
    reset();
} else {
    maListDeCourse = JSON.parse(maListDeCourse);
    compt = maListDeCourse.length > 0 ? maListDeCourse[maListDeCourse.length-1].ind : 0 ;
    ulGenerator(maListDeCourse);
};



function liGenerator(item, ind) {

    let newSpan = document.createElement('span');
    newSpan.innerText = item ;
    
    let newBtnEdit = document.createElement('button');
    newBtnEdit.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>` ;
    newBtnEdit.className = "btn btn-info d-block ms-auto text-white" ;
    newBtnEdit.setAttribute("onclick", `editItem(${ind})`);
    
    let newBtnDel = document.createElement('button');
    newBtnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg>`;
    newBtnDel.className = "btn btn-danger d-block ms-3 text-white" ;
    newBtnDel.setAttribute("onclick", `killItem(${ind})`);
    
    
    let newLi = document.createElement('li');
    newLi.className = "list-group-item d-flex" ;
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtnEdit);
    newLi.appendChild(newBtnDel);
    
    return newLi ;
}

function ulGenerator(list) {
    listeCourses.innerHTML = '' ;
    let newUl = document.createElement("ul");
    newUl.className = "list-group" ;
    
    maListDeCourse.forEach(item => {
        newUl.appendChild(liGenerator(item.item, item.ind));
    });
    
    listeCourses.appendChild(newUl) ;
}

window.onload = ulGenerator(maListDeCourse) ;


function saveList() {
    localStorage.setItem("listCourse",JSON.stringify(maListDeCourse));
    itemCourse.value = '' ;
    ulGenerator(maListDeCourse);
}

function btnAddAdd() {
    maListDeCourse.push({ind : compt++ , item : itemCourse.value});
    saveList();
}

function btnAddEdit(ind) {
    maListDeCourse[ind].item = itemCourse.value ;
    saveList();
    btnAdd.setAttribute('onclick','btnAddAdd()')
}



function killItem(ind) {
    maListDeCourse = maListDeCourse.filter((course) => course.ind != ind);
    saveList();
}

function reset() {
    maListDeCourse = [] ;
    compt = 0 ;
    saveList();
}

function editItem(ind) {
    let i = maListDeCourse.findIndex((course) => course.ind == ind );
    itemCourse.value = maListDeCourse[i].item ;
    btnAdd.setAttribute("onclick", `btnAddEdit(${i})`);
}