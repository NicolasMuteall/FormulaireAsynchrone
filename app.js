document.getElementById("inscription").addEventListener("submit", function(e){
    e.preventDefault();

    var data = new FormData(this);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            
            console.log(this.response);
            var res = this.response;

            if(res.success){
                alert(res.msg)
                console.log("Utilisateur inscrit!");
            }else{
                alert(res.msg);
            }

        }else if(this.readyState == 4){
            
            alert("Une erreur est survenue...");
        }
    };

    xhr.open("POST", "script.php", true);
    xhr.responseType = "json";
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);

    return false;
})