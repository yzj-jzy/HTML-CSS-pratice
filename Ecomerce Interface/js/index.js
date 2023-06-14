window.onload = function(){
    var navPath = document.querySelector("#wrapper #content .contentMain .navPath")
    var path = gooddata.path
    // console.log(path);
    for(var i = 0; i < path.length ;i++){

        if(i == path.length-1){
            var anode = document.createElement("a");
            anode.innerText = path[i].title;
            navPath.appendChild(anode);

        }else{

            var anode = document.createElement("a");
            anode.href = path[i].url;
            anode.innerText = path[i].title;

            var inode = document.createElement("i");
            inode.innerText = '/';

            navPath.appendChild(anode);
            navPath.appendChild(inode);
        }

        

    }
}