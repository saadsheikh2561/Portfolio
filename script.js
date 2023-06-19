let rowNo = 0;
let colNo = 0;

$(document).ready(function () {
  $(".adddaybutton").click(function () {
    day = document.querySelector("#DaySelection");
    markup =
      '<tr id="' +
      rowNo +
      '"><td id="' +
      rowNo +
      '0">' +
      day.value +
      "</td></tr>";
    tableBody = $("table tbody");
    tableBody.append(markup);
    Row = $("#" + rowNo);
    for (let i = 0; i < colNo; i++) {
      Row.append('<td id="' + rowNo + (i + 1) + '"></td>');
    }
    rowNo++;
  });

  $(".addtimebutton").click(function () {
    time = document.querySelector("#timeselection");
    markup = "<th>" + time.value + "</th>";
    console.log(markup);
    tableBody = $("table thead tr");
    tableBody.append(markup);
    for (let i = 0; i < rowNo; i++) {
      Row = $("#" + i);
      Row.append('<td id="' + i + (colNo + 1) + '"></td>');
    }
    colNo++;
  });
  $(".addagendabutton").click(function () {
    time = document.querySelector("#timeselection2");
    day = document.querySelector("#DaySelection2");
    agenda = document.querySelector("#agendatxt");
    listheader = $("th");
    headervalue = 0;
    for (let i = 0; i < listheader.length; i++) {
      if (time.value === listheader[i].innerText) {
        console.log("The value of header " + i);
        headervalue = i;

        break;
      }
    }
    rowvalue = 0;
    for (let i = 0; i < rowNo; i++) {
      sel = document.getElementById(i + "0");
      if (sel.innerText === day.value) {
        rowvalue = i;
        console.log("The value of rowvalue " + i);
        break;
      }
    }
    R = document.getElementById("" + rowvalue + headervalue);
    console.log(R);
    R.innerHTML =
      "<p>" +
      agenda.value +
      "</p>" +
      '<img class="del-image" id="U' +
      rowvalue +
      headervalue +
      '" src="Pics/download.png">';
    let allDelimage = $(".del-image");

    Array.from(allDelimage).forEach(function (element) {
      element.addEventListener("click", () => {
        let imgid = element.id;
        imgid = imgid.substring(1);
        let delTd = document.getElementById(imgid);
        delTd.innerHTML = "";
      });
    });
  });
});
