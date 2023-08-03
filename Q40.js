// function make_album(artist: string, title: string){
//     let album ={
//         artist_name : artist,
//         album_title : title,
//     }
//       return album;
//     }
//     let album1 = make_album("Halsey", "Manic");
//     let album2 = make_album("Selena", "Rare");
//     console.log(album1);
//     console.log(album2);
function make_album(artist, title) {
    var album = {
        artist_name: artist,
        album_title: title,
    };
    return album;
}
var first_album = make_album('Taylor Swift', 'Midnights');
var second_album = make_album('Justin Bieber', 'Justice');
console.log('First Album: ', first_album);
console.log('Second Album: ', second_album);
