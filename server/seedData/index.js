const albums = require('./albums')
const artists = require('./artists')
const { Artist, Album } = require('../models')

module.exports = async () => {
  console.log('Creating artists')
  const artistObjects = artists.map(it => ({name: it}))
  await Artist.create(artistObjects)
  console.log('Artists created')
}