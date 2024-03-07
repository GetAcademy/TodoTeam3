function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <table>
            <tr>
                <th></th>
                <th>Oppgave</th>
                <th>Frist</th>
                <th>Ansvarlig</th>
            </tr>
            ${createRowsHtml()}
        </table>
    `;
}

function createRowsHtml() {
    let rowsHtml = '';
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        if (!filterResponsible || filterResponsible == task.responsible) {
            rowsHtml += /*HTML*/ `<tr>${createSingleRowHtml(index, task)}</tr>`;
        }
    }
    return rowsHtml;
}

function createSingleRowHtml(index, task) {
    if (task.isEditMode) {
        return /*HTML*/`
            <td>
                <input 
                    type="checkbox" 
                    ${task.isSelected ? 'checked' : ''}
                    onchange="tasks[${index}].isSelected=this.checked"
                />
            </td>
            <td>
                <input 
                    type="text" 
                    value="${taskTextInput ?? ''}"
                    oninput="taskTextInput = this.value"    
                />
            </td>
            <td>${new Date(task.doneDate).toLocaleDateString()}</td>
            <td>${task.responsible}</td>
            <td>
            <button onclick="saveTaskChanges(${index})">Lagre</button>
            <button onclick="cancelTaskChanges(${index})">Avbryt</button>
        </td>             
        `;
    } else {
        return /*HTML*/`
            <td>
                <input 
                    type="checkbox" 
                    ${task.isSelected ? 'checked' : ''}
                    onchange="tasks[${index}].isSelected=this.checked"
                />
            </td>
            <td>${task.text}</td>
            <td>${new Date(task.doneDate).toLocaleDateString()}</td>
            <td>${task.responsible}</td>  
            <td>
                <button onclick="enableEditRow(${index})">Rediger</button>
            </td>      
        `;
    }
}
