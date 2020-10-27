var TableTemplate = function TableTemplate() { };

TableTemplate.fillIn = function fillIn(id, dict, columnName) {
    var table = document.getElementById(id);
    var processor = new Cs142TemplateProcessor(table.rows[0].innerHTML);
    var headerRowFilledIn = processor.fillIn(dict);
    var columnElems = table.rows[0].getElementsByTagName('td');
        table.rows[0].innerHTML = headerRowFilledIn;
    if (columnName === undefined) {
        processor = new Cs142TemplateProcessor(table.innerHTML);
        table.innerHTML = processor.fillIn(dict);
    }
    var i, columnNumber;
    for (i=0; i<columnElems.length; i++) {
        if (columnName === columnElems[i].textContent) {
            columnNumber = i;
            break;
        }
    }
    if (columnNumber === undefined) {
        table.style.visibility = 'visible';
        return;
    }
    var cell;
    for (i = 1; i < table.rows.length; i += 1) {
        cell = table.rows[i].cells[columnNumber];
        processor = new Cs142TemplateProcessor(cell.textContent);
        cell.textContent =  processor.fillIn(dict);
    }
    table.style.visibility = 'visible';
};