function myFunction() {
   document.getElementById("target").innerHTML = "Paragraph changed";
   var title = $(this).parent('a').attr("title")
}