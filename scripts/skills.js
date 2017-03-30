var bSkillsShown = false;
var software = ["JAVASCRIPT", "JQUERY", "HTML & CSS", "PHOTOSHOP", "C#", "ANGULARJS", "BOOTSTRAP", "SQL", "MYSQL", "RUBY & RAILS", "PHP"];

var blueBar = ["9.2%", "15.3%", "12.75%", "40.8%", "22.95%", "33.15%", "40.8%", "17.3%", "20.4%", "25.5%", "40.8%"];

var softwarePercent = ["80%", "70%", "75%", "20%", "55%", "35%", "20%", "70%", "60%", "50%", "20%"];

var showSkills = function() {
    if (!bSkillsShown) {
        bSkillsShown = true;
        for (var i = 0; i < software.length; i++) {
            $("#skills").append(
            '<tr class="SkillsContent">'
          +   '<td width="10%">'
          +     '<p id="softwareName">' + software[i] + '</p>'
          +   '</td>'
          +   '<td width="2%"></td>'
          +   '<td width="51%" style="padding-right:' + blueBar[i] + '">'
          +     '<div id="skillsBar"></div>'
          +   '</td>'
          +   '<td width="2%"></td>'
          +   '<td width="5%">'
          +     '<p id="skillsPercent">' + softwarePercent[i] + '</p>'
          +   '</td>'
          + '</tr>');    
        }
    }
};

$(document).ready(function() {
    $(window).scroll(function() {
        var sT = $("#skills").offset().top;
        var sH = $("#skills").outerHeight();
        var wH = $(window).height();
        var wS = $(this).scrollTop();
        if (wS > (sT + sH - wH)) {
            showSkills();
        }
    });
});



