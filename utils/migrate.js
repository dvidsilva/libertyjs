const migrate = require('npm-migrate')

const moduleName = '@slingshothealth/analytics'
const from = 'https://verdaccio.slingshothealth.com'
const to = 'https://npm.pkg.github.com'

// optional
const options = {
    debug: true // default
}

migrate(moduleName, from, to, options)
    .then((migrated) => console.log(migrated)) // list of migrated packages
    .catch((err) => console.error(err))

