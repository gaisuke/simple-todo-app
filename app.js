document.querySelector('#create-todo-btn').onclick = function(){
    if (document.querySelector('#create-todo input').value.length == 0) {
        alert('Please input your todo!')
    } else {
        document.querySelector('#view-todo').innerHTML +=`
        <div class="todo-item">
            <p id="todo-text">
                ${document.querySelector('#create-todo input').value}
            </p>
        </div>
        `
    }
}