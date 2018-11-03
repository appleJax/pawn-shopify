require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  HASURA_ACCESS_KEY: process.env.HASURA_ACCESS_KEY
}
