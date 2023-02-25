let tableData = [];

const addRowButton = document.getElementById('btn');

let id = 0;
addRowButton.addEventListener('click', createNewRow);


function createNewRow(){
    id++;
    const table = document.querySelector('table');

    const newRow = table.insertRow(-1);
    
    const idCell = newRow.insertCell(0);
    const studentCell = newRow.insertCell(1);
    const rollCell = newRow.insertCell(2);
    const subjectCell = newRow.insertCell(3);
    const marksCell = newRow.insertCell(4);
    const markedByCell = newRow.insertCell(5);
    const saveCell = newRow.insertCell(6);

    idCell.innerHTML = id;
    studentCell.innerHTML = '<input type="text"  style="border:none;" required >';
    rollCell.innerHTML = '<input type="text" style="border:none;" required >';
    rollCell.innerHTML = '<input type="text"  style="border:none;" required >';
    subjectCell.innerHTML = '<input type="text"  style="border:none;" required >';
    marksCell.innerHTML = '<input type="number"  style="border:none;" required >';
    markedByCell.innerHTML = '<input type="email"  style="border:none;" required>';
    saveCell.innerHTML = '<button class="save-cell"  style="width:12rem;" >Save</button';

    newRow.style.padding = '1rem';

   
    
    studentCell.style.borderLeft = '1px solid black';
    rollCell.style.borderLeft = '1px solid black';
    subjectCell.style.borderLeft = '1px solid black';
    marksCell.style.borderLeft = '1px solid black';
    markedByCell.style.borderLeft = '1px solid black';
    saveCell.style.borderLeft = '1px solid black';

    idCell.style.borderBottom = '1px solid black';
    studentCell.style.borderBottom = '1px solid black';
    rollCell.style.borderBottom = '1px solid black';
    subjectCell.style.borderBottom = '1px solid black';
    marksCell.style.borderBottom = '1px solid black';
    markedByCell.style.borderBottom = '1px solid black';
    saveCell.style.borderBottom = '1px solid black';

    saveCell.style.width= '16rem';
    
}

const table = document.querySelector('table');

table.addEventListener('click', function(event) {
  if (event.target.classList.contains('save-cell')) {
    const row = event.target.parentNode.parentNode;
    const id = row.querySelector('td').textContent;
    const student_name = row.querySelectorAll('input[type="text"]')[0].value;
    const student_roll = row.querySelectorAll('input[type="text"]')[1].value;
    const subject = row.querySelectorAll('input[type="text"]')[2].value;
    const marks = row.querySelector('input[type="number"]').value;  
    const markedBy = row.querySelector('input[type="email"]').value;

    const inputs = [student_name, student_roll, subject, marks, markedBy];
    const isInputsValid = inputs.every(input => input !== '');
    const isMarksValid = !isNaN(marks);
    const isMarkedByValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(markedBy);

    if (isInputsValid && isMarksValid && isMarkedByValid){
        const data = { id, student_name, student_roll, subject, marks, markedBy };
        tableData.push(data);
        console.log(tableData);
    } else{
        alert('Please fill all the fields and make sure to enter a valid number in the marks field and a valid email address in the markedBy field.');
    }

    
  }
});

