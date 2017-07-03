function addWork() {
    var work = document.getElementById('work');
    if (work.value == '') {
        work.style.borderColor = 'red';
        work.style.color = 'red';
        work.placeholder = "Enter Some Work";
    }
    else {
        work.style.borderColor = 'dodgerblue';
        work.style.color = 'black';
        work.placeholder = "Add Work";
        var node = document.createElement("li");
        var node1 = document.createElement("hr");
        var node2 = document.createElement("img");
        var node3 = document.createElement("span");
        node2.src = "images/del.png";
        node2.onclick = function () { var li = this.parentNode; var ul = li.parentNode; ul.removeChild(li); };
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var flag1 = false;
        var dt = new Date();
        var now1 = dt.getMonth();
        for (var i = 0; i < months.length; i++) {
            if (i == now1) {
                flag1 = true;
                var result1 = months[i];
            }
        }
        var date = " " + dt.getDate() + "/" + result1 + "/" + dt.getFullYear();
        node3.innerHTML = date;
        var textnode = document.createTextNode(work.value);
        node.appendChild(textnode);
        node.appendChild(node3);
        node.appendChild(node2);
        node.appendChild(node1);
        document.getElementById("addedWork").appendChild(node);
        work.value = '';
    }
}

function delWork() {
    document.getElementById('addedWork').innerHTML = '';
}