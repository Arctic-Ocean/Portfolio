//global variables
var monthEl = $(".c-main");
var dataCel = $(".c-cal__cel");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var monthText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var indexMonth = month;
var todayBtn = $(".c-today__btn");
var addBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
today = year + "-" + month + "-" + day;

// ------ functions control -------

//button of the current day
todayBtn.on("click", function () {
  if (month < indexMonth) {
    var step = indexMonth % month;
    movePrev(step, true);
  } else if (month > indexMonth) {
    var step = month - indexMonth;
    moveNext(step, true);
  }
});
//higlight the cel of current day
dataCel.each(function () {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});
//window event creator
addBtn.on("click", function () {
  winCreator.addClass("isVisible");
  $("body").addClass("overlay");
  dataCel.each(function () {
    if ($(this).hasClass("isSelected")) {
      today = $(this).data("day");
      document.querySelector('input[type="date"]').value = today;
    } else {
      document.querySelector('input[type="date"]').value = today;
    }
  });
});
closeBtn.on("click",function () {
    winCreator.removeClass("isVisible");
    $("body").removeClass("overlay");
});
saveBtn.on("click", function () {
    var inputName = $("input[name=name]").val();
    var inputDate = $("input[name=date]").val();
    var inputNots = $("textarea[name=nots]").val();
    var inputTag = $("select[name=tags]").find(":selected").

    dataCel.each(function () {
        if ($(this).data("day") === inputDate) {

            if (inputName != null) {
                $(this).attr("data-name" , inputName);

            }
     
            if (inputNotes != null) {
                $(this).attr("data-notes" , inputNots);
            }
            if (inputName != null) {
                $(this).attr("event--" + inputtag );
                
            }
    fillEventSidebar($(this));
        }

    });
   winCreator.removeClass("isVisible");
   $("body").removeClass("overlay");
   $("#addEvent")[0].reset();

});
function fillEventSidebar(self) {
    $(".c-aside__event").remove();
    var thisName = self.attr("data-name");
    var thisNotes = self.attr("data-notes");
    var thisImportant = self.hasClass("event--important");
    var thisBirthday = self.hasClass("event--festivity");
    var thisFestivity = self.hasClass("event--Festivity");
    var thisEvent = self.hasClass("event--Event");
    switch (true) {
        case thisImportant:
            $(".c-aside__eventList").append(
                "<p class='cside__event--importent'> " +
            thisName +
            "<span>" +
            thisNotes +
            "</span></p>"
         
            );
            break;
            case thisBirthday:
                $(".c-aside__eventList").append("<p class='cside__event--birthday'> " +
                thisName +
                "<span>" +
                thisNotes +
                "</span></p>" 
                );
                break;
                case thisFestivity:
                    $(".c-aside__eventList").append("<p class='cside__event--thisFestivity'> " +
                    thisName +
                    "<span>" +
                    thisNotes +
                    "</span></p>"
                    ); break;
                    case thisEvent:
                        $(".c-aside__eventList").append("<p class='cside__event'> " +
                        thisName +
                        "<span>" +
                        thisNotes +
                        "</span></p>" 
                        ); break;
    }

}
dataCel.on("click", function () {
    var thisEl = $(this);
    var thisDay = $(this).attr("data-day").slice(8);
    var thisMonth = $(this).attr("data-day").slice(5, 7);

    fillEventSidebar($(this));

    $(".c-aside__num").text(thisDay);
    $(".c-aside__Month").text(monthtext[thisMonth - 1]);

    dataCel.removeClass("isSelected");
    this.addClass("isSelected");

});

function moveNext(fakeClick, indexNext) {
    for (var i = 0; i < fakeClick; i++) {
        $(".c-main").css({
     left: "-=100%",
        });
        $(".c-paginator__month").css({
            left: "-=100%",
               });
               switch (true) {
                   case indexNext:
                       indexMonth +=1;
                       break;

                       
               }
    }
}
function movePrev(fakeClick, indexPrev) {
    for (var i = 0; i < fakeClick; i++) {
        $(".c-main").css({
     left: "+=100%",
        });
        $(".c-paginator__month").css({
            left: "+=100%",
               });
               switch (true) {
                   case indexNext:
                       indexMonth -=1;
                       break;

                       
               }
    }
}
function buutonsPaginator(buttonId,mainClass, monthClass ,next,prev) {
    switch (true) {
        $(buttonId).on("click", function () {
            if (indexMonth >= 2) {
                $(mainClass).css({
                    left: "+=100%"
                });
                $(mainClass).css({
                    left: "+=100%"
                });
                indexMonth -= 1;
            }
            return indexMonth 
            
        });
        break;
        case prev:
        $(buttonId).on("click", function () {
            if (indexMonth >= 2) {
                $(mainClass).css({
                    left: "+=100%"
                });
                $(mainClass).css({
                    left: "+=100%"
                });
                indexMonth += 1;
            
            return indexMonth
}
break;
        }
    }

    buutonsPaginator("#next",monthEl,".c-paginator__month", false, true);
    buutonsPaginator("#next",monthEl,".c-paginator__month", false, false);

moveNext(indexMonth -1,false);

$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);
















