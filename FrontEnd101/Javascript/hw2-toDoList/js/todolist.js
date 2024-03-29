window.onload = function () {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var list = document.getElementById("list");
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.textContent = task;

        var listItem = document.createElement("div");
        listItem.className = "list-item";

        var deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.innerHTML = '<img src="./close.png" width="2%" alt="Close"  />';
        listItem.appendChild(li);
        listItem.appendChild(deleteButton);

        document.getElementById("list").appendChild(listItem);


    });
};


function newElement(event) {
    var inputValue = document.getElementById("task").value.trim();
    if (inputValue === '' || event.keyCode === 32) {
        $('.error').toast('show');
    } else {
        var li = document.createElement("li");
        li.textContent = inputValue;

        var listItem = document.createElement("div");
        listItem.className = "list-item";

        var deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.innerHTML = '<img src="./close.png" width="2%" alt="Close"  />';

        listItem.appendChild(li);
        listItem.appendChild(deleteButton);

        document.getElementById("list").appendChild(listItem);

        $('.success').toast('show');
        document.getElementById("task").value = "";

        // Local Storage'a görev ekle
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(inputValue);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        var taskIndex = tasks.indexOf(event.target.parentElement.textContent);
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        event.target.parentElement.remove();
    }
});





//Liste elemanını yapıldı olarak işaretleme

document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        markDone(event);
    }
});


function markDone(event) {
    var element = event.target;
    var checkbox = document.createElement("span");
    checkbox.className = "checkbox";
    checkbox.style.marginRight = "20px";
    checkbox.style.marginLeft = "-25px";

    element.classList.toggle("done");
    if (element.classList.contains("done")) {
        element.insertBefore(checkbox, element.firstChild);
        element.classList.add("checked");

    } else {
        element.removeChild(element.firstChild);
        element.style.textDecoration = "none";
        element.classList.remove("checked");
    }
}

