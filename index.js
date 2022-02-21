const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');

const generateTemplate= todo =>{
    const html= `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML+=html;
}

addForm.addEventListener('submit', e =>{
    e.preventDefault(); //sayfa yenilenmez.

    const todo=addForm.add.value.trim(); //trim boşlukları kaldırır.
    // console.log(todo);
    if(todo.length > 0){
        generateTemplate(todo);
        addForm.reset(); //inputta girilen değeri sonrasında  sıfırlar.
    }
    
})