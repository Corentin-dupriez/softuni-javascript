function createSongs(informationArray) {
  class Song {
    constructor(typeList, name, time){
      this.typeList = typeList
      this.name = name 
      this.time = time
    }
  }
  songsList = []
  numSongs = Number(informationArray[0]);
  typeList = informationArray[informationArray.length - 1]
  songs = informationArray.slice(1, numSongs + 1)

  for (song of songs) {
    songType = song.split('_')[0]
    if (songType == typeList || typeList == 'all') {
      title = song.split('_')[1]
      time = song.split('_')[2]
      newSong = new Song(songType, title, time)
      songsList.push(newSong)
    }
  } 
  for (song of songsList) {
    console.log(`${song.name}`)
  }
}

createSongs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite'])

createSongs([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all'])
