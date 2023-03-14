const albumSeed = require('./albumSeed')
const artistSeed = require('./artistSeed')

(async () => {
  await artistSeed()
  await albumSeed()
})()