var acc = document.getElementsByClassName("program-table__row");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "table-row") {
            panel.style.display = "none";
        } else {
            panel.style.display = "table-row";
        }
    }
}