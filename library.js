// Write your code here!
let r = 6;
let loggedIn = false;

let data = [
    [1, 'Book1', 'Author1', 'UserC', 'UserB', '-'],
    [2, 'Book2', 'Author2', 'UserC', '-', '-'],
    [3, 'Book3', 'Author3', 'UserD', 'UserC', '-'],
    [4, 'Book4', 'Author4', 'UserA', '-', '-'],
    [5, 'Book5', 'Author5', 'UserA', '-', '-'],
    [6, 'Book6', 'Author6', 'UserB', 'UserA', '-']
];

var table = document.getElementById('info-table');

for (var i = 0; i < 6; i++) {
    var row = table.insertRow(i + 1);
    for (var j = 0; j < 6; j++) {
        var cell = row.insertCell(j);
        row.setAttribute('id', i);
        cell.innerHTML = data[i][j];
    }
}

if (!loggedIn) {
    let display = document.getElementById('logged-in-user-name');
    display.innerHTML = 'No User Logged In';
}

var userName;
function changeLoggedInUser() {
    userName = document.getElementById('logged-user').value;
    if (userName === 'UserA' || userName === 'UserB' || userName === 'UserC' || userName === 'UserD') {
        customRow(userName);
    }

    for (var ro = 1; ro < r; ro++) {
        var addHere = table.rows[ro].cells[3].innerHTML;
        if (addHere !== userName) {
            let toCheck = table.rows[ro].cells[4].innerHTML;
            if (toCheck === userName) {
                var but1 = document.createElement("button");
                but1.innerHTML = 'Return';
                but1.setAttribute('id', 'retBtn');
                let toChange = table.rows[ro].cells[5];
                toChange.innerHTML = '';
                toChange.appendChild(but1);
                but1.addEventListener('click', function change() {
                    let btn = document.getElementById('retBtn');
                    let tbl = document.getElementById('info-table');
                    let curRow1 = btn.parentNode.parentNode.rowIndex;
                    btn.innerHTML = 'Borrow';
                    tbl.rows[curRow1].cells[4].innerHTML = '-';
                });
            } else if (toCheck === '-') {
                var but = document.createElement("button");
                but.innerHTML = 'Borrow';
                but.setAttribute('id', 'borBtn');
                let toChange = table.rows[ro].cells[5];
                toChange.innerHTML = '';
                toChange.appendChild(but);
                but.addEventListener('click', function change2() {
                    let btn = document.getElementById('borBtn');
                    let tbl = document.getElementById('info-table');
                    let curRow = btn.parentNode.parentNode.rowIndex;
                    btn.innerHTML = 'Return';
                    tbl.rows[curRow].cells[4].innerHTML = userName;
                });
            }
        }
    }


}

function customRow(userName) {
    r++;
    let display = document.getElementById('logged-in-user-name');
    display.innerHTML = 'Logged in User: ' + userName;
    var row = table.insertRow(r);
    row.setAttribute('id', r);
    var cell = row.insertCell(0);
    cell.innerHTML = r;

    cell = row.insertCell(1);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    cell.appendChild(input1);
    input1.setAttribute('placeholder', 'title');
    input1.setAttribute('required', '');

    cell = row.insertCell(2);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    cell.appendChild(input2);
    input2.setAttribute('placeholder', 'author');
    input2.setAttribute('required', '');

    cell = row.insertCell(3);
    cell.innerHTML = userName;

    cell = row.insertCell(4);
    cell.innerHTML = '-';

    cell = row.insertCell(5);
    var but = document.createElement("button");
    but.innerHTML = 'Add Book';
    cell.appendChild(but);
    but.addEventListener('click', function addRow() {
        if (input1.value !== '' && input2.value !== '')
            customRow(userName);
    });
}