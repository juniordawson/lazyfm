function myFunction(){
    var filtered= mixes.filter((obj)=>{
        return obj.mixId.match(new RegExp(document.getElementById('search').value,'ig'));
    });
    console.log(filtered);
  };