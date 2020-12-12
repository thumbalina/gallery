function refreshgallery() {
    
    var timeleft = 1;
    var downloadTimer = setInterval(function () {
        if (timeleft >= 10) {
            $("#modal").hide();
            window.location.reload();
            clearInterval(downloadTimer);
        }
        document.getElementById("countdown").innerHTML = 10 - timeleft;
        timeleft += 1;
    }, 1000);
}