
/* Varianta lunga 

function displayStuf (items){
    var listItems= document.querySelector('table tbody');
    var resultItem=items.map(function(item){
        return `<tr>
        <td>${item.fName} ${item.lName}</td>
        <td>${item.grade}</td>
        </tr>`;
    });
    
    listItems.innerHTML = resultItem.join('');
};

function initStuf(){
    $.ajax('./data/data.json').done(function(items){
        displayStuf(items);
        

    });
    
};
initStuf();

*/

/* Varianta scurta si optima */
function firstTable() {
    $.ajax('./data/data.json').done(function (students) {
        var list = $('table tbody');
        var result = students.map(function (student) {
            return `<tr>
            <td>${student.fName} ${student.lName}</td>
            <td>${student.grade}</td>
            </tr>`;
        });
        list.html(result);
    });
};
firstTable();
/* zebra style table */

$(document).ready(function () {
    $("#table-first tr:odd").addClass("oddZebra");
    $("#table-first tr:even").addClass("evenZebra");
});
/* new contact modal*/


document.getElementById("newContactBtn").onclick = displayModal;

function displayModal() {
    console.log('click pe mondal')
    document.getElementById("modal1").style.display = "flex"
}
document.querySelector('.close').onclick = closeModal;
function closeModal() {
    document.getElementById("modal1").style.display = "none";
}
/* add new contact */


document.getElementById("submitBtn").onclick = newContact;

function newContact() {
    var nfn = $('#lName').val();
    var nln = $('#fName').val();
    var npn = $('#phoneNumber').val();
    $.getJSON("data/new_data.json", function (data) {
        var newContact = {
            fName: nfn,
            lName: nln,
            grade: npn
        }
        data.push(newContact);
        var newData = JSON.stringify(newContact);
        /*fs.writeFile('data/data.json', newData, 'utf8', function (err) {
            if (err) throw err;
            console.log('The file has been saved!');
        });*/

        console.log("new contact: ", newData);


        $.ajax({
            type: 'POST',
            data: newData,
            url: 'data/new_data.json',
            success: function () {
                console.info('data saved!')
            },
            error: function () {
                console.error('fail to save data')
            }
        });


        /*jQuery.post('http://localhost:3000/data/agenda.json', {
            newData: newData
        }, function (response) {
            console.info("caontact saved")
        })*/
    })
    console.log(nfn, nln, npn);
    document.getElementById("modal1").style.display = "none";
}
/* print page  */

$('#print').on('click', function () {
    var table = $('table');
    window.print();
    return false;
});
/* Limit character input in the textarea including count */


/* fail ---> misspell "lenght"
 var maxLenght = 15;
  $('#limitImp').keyup(function () {
      var textLeft = maxLenght - $(this).val().lengh;
      $('#charLeft').text(textLeft);
  }) */

var maxLength = 15;
$('#textarea').keyup(function () {
    var textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
});

/* turn first word to bold */

$('#listLearn p').each(function(){  
    var pdata = $(this);  
    pdata.html( pdata.text().replace(/(^\w+)/,'<strong>$1</strong>') );  
}); 