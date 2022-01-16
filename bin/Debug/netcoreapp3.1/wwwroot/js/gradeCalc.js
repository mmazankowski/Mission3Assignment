$("#btnSend").click(function () {
    var a = $("#numAssign").val();
    var b = $("#numGroup").val();
    var c = $("#numQuiz").val();
    var d = $("#numExam").val();
    var e = $("#numIntex").val();
    var final_percent = (a * .55) + (b * .05) + (c * .10) +
        (d * .20) + (e * .10);
    final_percent = final_percent.toFixed(2);

    if (final_percent <= 100 && final_percent > 93) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: A")
    } else if (final_percent <= 92 && final_percent >= 87) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: A-")
    } else if (final_percent <= 86 && final_percent >= 82) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: B+")
    } else if (final_percent <= 81 && final_percent >= 77) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: B")
    } else if (final_percent <= 76 && final_percent >= 73) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: B-")
    } else if (final_percent <= 72 && final_percent >= 67) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: C+")
    } else if (final_percent <= 66 && final_percent >= 62) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: C")
    } else if (final_percent <= 61 && final_percent >= 57) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: C-")
    } else if (final_percent <= 56 && final_percent >= 51) {
        alert("Final Percent: " + (final_percent) + ", Final Grade: D")
    } else {
        alert("Final Percent: " + (final_percent) + ", Final Grade: F")
    }
})
