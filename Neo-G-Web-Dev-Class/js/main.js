function lunchboxOpen(lunchID) {
    document.getElementById('lunch_' + lunchID).style.display = "inline-block";
    document.getElementById('clasp_' + lunchID).innerHTML="<a href=\"javascript:lunchboxClose('" + lunchID + "');\">Close Chat with NEO ...</a>";
    }
    function lunchboxClose(lunchID) {
    document.getElementById('lunch_' + lunchID).style.display = "none";
    document.getElementById('clasp_' + lunchID).innerHTML="<a href=\"javascript:lunchboxOpen('" + lunchID + "');\">Open Chat with NEO ...</a>";
    }
    document.querySelector(".menu-bar").addEventListener("click", function() {
        document.querySelector(".nav-links").classList.toggle("open");
      });