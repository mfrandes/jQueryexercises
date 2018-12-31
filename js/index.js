/* nav pages */
function sufrfPages() {
    $('#surfBar li a').click(function (e) {
        var page = e.target.getAttribute('data-page');

        $('.container').hide();
        $(`#${page}-page`).fadeIn();
    });
};
sufrfPages();
$(`#second-page`).show();

/* load data from json to html table */

function firstTable() {
    $.ajax('data/new_data.json').done(function (students) {
        var list = $('table tbody');
        var result = students.map(function (student) {
            return `<tr>
            <td>${student.fName} ${student.lName}</td>
            <td>${student.grade}</td>
            </tr>`;
        });

        list.html(result);
        /* zebra style table */
        $("#table-first tr:odd").addClass("oddZebra");
        $("#table-first tr:even").addClass("evenZebra");
    });
};
firstTable();

/* new contact modal */


document.getElementById("newContactBtn").onclick = displayModal;

function displayModal() {
    console.log('click pe mondal')
    document.getElementById("modal1").style.display = "flex"
}
document.querySelector('.close').onclick = closeModal;
function closeModal() {
    document.getElementById("modal1").style.display = "none";
}
/* add new contact attempt ..sow far */


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

var maxLength = 15;
$('#textarea').keyup(function () {
    var textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
});

/* turn first word to bold */

$('#listLearn p').each(function () {
    var pdata = $(this);
    pdata.html(pdata.text().replace(/(^\w+)/, '<strong>$1</strong>'));
});

/* Create new div */

function newDiv() {
    console.log("click pe div");
    $(document).ready(function () {
        var test = {
            id: "div",
            class: "wrap",
            css: {
                "background-color": "green"
            }
        }
        var $div = $("<div>", test);
        $div.html("New Division");
        $(".container").append($div);
    });
}

/* transfer btn from one div to another */

$(".transferBtn").click(function () {
    console.log("I'm alive!!!")
    if ($(this).parent().attr("id") == "leftSide") {
        $(this).detach().appendTo('#rightSide');
    } else {
        $(this).detach().appendTo('#leftSide');
    }
})
/* options on a select box */

function removeOptions(e){
    var eatAOnion = $(e).siblings().children("option:selected", this).attr('value');
    console.log("options:", eatAOnion);
    $(e).siblings().empty().append(`<option selected="selected" value="${eatAOnion}">${eatAOnion}</option>`);
}

$('#myColorLeft').on('change', function () {
    var selectVal = $("#myColorLeft option:selected").val();
    
    $(document).ready(function(){
       var element = $("#leftSide")
        element.css(`background-color`, `${selectVal}`);
        
        console.log("s-a selectat:", selectVal);
    })
    
})
$('#myColorRight').on('change', function () {
    var selectVal = $("#myColorRight option:selected").val();
    
    $(document).ready(function(){
       var element = $("#rightSide")
        element.css(`background-color`, `${selectVal}`);
        
        console.log("s-a selectat:", selectVal);
    })
    
})
/* text decoration and counting*/
$("#textDe h2").each(function(){
    var textWords = $(this).text().split('');
    
    $(this).empty().html(function(){
        for(i=0; i < textWords.length; i++ ) {
            if(i === 0){
                $(this).append(`<span style="text-decoration:underline">` + textWords[i] + `</span>`);
            }else{
                $(this).append(`<span style="text-decoration:underline">` + textWords[i] + `</span>`);
            }
        }
    });
});
$("#textDe form input").keyup(function(){
    var tValue = $(this).val();
    var tLenght = $(this).val().length;
    console.log(tValue);
    $("#charNr").text(tLenght);

})
/* Remove all class */

function classRemover(){
    console.log("click pe remoove classes")
    $('div').removeClass();
};