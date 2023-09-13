document.querySelector('#create-todo-btn').onclick = function(){
    if (document.querySelector('#create-todo input').value.length == 0) {
        alert('Please input your todo!')
    } else {
        document.querySelector('#view-todo').innerHTML +=`
        <div class="todo-item" style="display: flex; justify-content: space-around">
            <p id="todo-text">
                ${document.querySelector('#create-todo input').value}
            </p>
            <button class="delete-btn">
            X
            </button>
        </div>
        `
        var currentTodo = document.querySelectorAll('.delete-btn');
        for (let i = 0; i < currentTodo.length; i++) {
            currentTodo[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}