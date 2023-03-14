const albumSeed = require('./albumSeed')
const artistSeed = require('./artistSeed')

module.exports = async () => {
  await artistSeed()
  await albumSeed()
}