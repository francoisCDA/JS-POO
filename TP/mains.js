// localStorage.setItem()
// localStorage.getItem()
// locaStorage.clear()
// locaStorage.removeItem()

const listeCourses = document.getElementById('listeCourses');
const intemCourse = document.getElementById('itemCourse');
const btnAdd = document.getElementById('btnAdd');
const btnClear = document.getElementById('btnClear');

let maListDeCourse = localStorage.getItem('listCourse') ;
let compt ;
// null

if (maListDeCourse == null) {
    maListDeCourse = [] ;
    compt = 0 ;
} else {
    maListDeCourse = JSON.parse(maListDeCourse);
    compt = maListDeCourse[maListDeCourse.length-1].ind;
};

ulGenerator(maListDeCourse);


btnAdd.onclick = () => {
    maListDeCourse.push({ind : compt++ , item : intemCourse.value});
    localStorage.setItem("listCourse",JSON.stringify(maListDeCourse));
    intemCourse.value = '';
    ulGenerator(maListDeCourse);
}




function liGenerator(item) {
    let newLi = document.createElement('li') ;

    let newSpan = document.createElement('span');
    newSpan.innerText = item ;

    let newBtnEdit = document.createElement('button');
    newBtnEdit.innerText = "insérer iconne éditer" ;
    
    let newBtnDel = document.createElement('button');
    newBtnDel.innerText = "insérer iconne supprimer" ;

    newLi.appendChild(newSpan);
    newLi.appendChild(newBtnEdit);
    newLi.appendChild(newBtnDel);

    //console.log(newLi);

    return newLi ;
}

function ulGenerator(list) {
    listeCourses.innerHTML ='';
    console.log(maListDeCourse);
    let newUl = document.createElement("ul");

    maListDeCourse.forEach(item => {
        newUl.appendChild(liGenerator(item.item));
    });
    
    listeCourses.appendChild(newUl);
}
