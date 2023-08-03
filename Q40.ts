function make_album(artist: string, title: string){
    let album ={
        artist_name : artist,
        album_title : title,
    }

      return album;

    }

    let album1 = make_album("Halsey", "Manic");
    let album2 = make_album("Selena", "Rare");
    console.log(album1);
    console.log(album2);


