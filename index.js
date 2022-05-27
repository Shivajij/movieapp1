

function findData(){

    let container = document.getElementById("data");
    container.innerHTML=null;
    let search=document.getElementById("search").value;

    const url="http://omdbapi.com/?t="+search+"&apikey=b4fdb7b7";
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res)
          append(res);
      })
      .catch(function (err){
          console.log("err:",err);
      });
    
    function append(d) {
        let div = document.createElement("div");
        
            let img = document.createElement("img");
            img.src = d.Poster;
            let div1=document.createElement("div");
            div1.className="main";
                let name = document.createElement("h1");
                name.innerText = d.Title;
                let actors = document.createElement("p");
                actors.innerText = "Actors: "+d.Actors;
                let awards = document.createElement("p");
                awards.innerText = "Awards: "+d.Awards;
                let director = document.createElement("p");
                director.innerText = "Director: "+d.Director;
                let language = document.createElement("p");
                language.innerText = "Language: "+d.Language;
                let ratings = document.createElement("p");
                ratings.innerText = "Ratings: "+d.Ratings[0].Value;
                let release = document.createElement("p");
                release.innerText = "Release Date: "+d.Released;
                let writer = document.createElement("p");
                writer.innerText = "Writer: "+d.Writer;
                let genre = document.createElement("p");
                genre.innerText = "Genre: "+d.Genre;

            div1.append(name, ratings, release , actors, director, awards,language, writer, genre)
    
          div.append(img, div1)
    
        container.appendChild(div);
    }
}