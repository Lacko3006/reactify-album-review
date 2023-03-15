const albums = require('./albums')
const artists = require('./artists')
const { Artist, Album } = require('../models')

module.exports = async () => {
  console.log('Deleting artists')
  await Artist.deleteMany({})
  console.log('Deleting albums')
  await Album.deleteMany({})

  const albumsGroupedByArtist = albums.reduce((rv, x) => {
    const key = x.artist
    if (!rv[key]) {
      rv[key] = []
    }
    const album = {
      ...x,
    }
    delete album.artist
    rv[key].push(album)
    return rv
  }, {});
  const artistPromises = Object
    .keys(albumsGroupedByArtist)
    .map(async it => {
      console.log(`Creating albums by ${it}`)
      const createdAlbums = await Album.create(albumsGroupedByArtist[it])
      const albumReferences = createdAlbums.map(it => it._id)
      return {
        name: it,
        albums: albumReferences,
      }
    })
  const artistsToCreate = await Promise.all(artistPromises)
  console.log('Albums created')

  console.log('Creating artists')
  await Artist.create(artistsToCreate)
  console.log('Artists created')
}