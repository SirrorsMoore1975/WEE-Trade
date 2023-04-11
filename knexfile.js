require('dotenv').config()

module.exports= {
    client:'pg',
        connection: process.env.DB_URL_LOCAL || {
            host: process.env.LOCAL_HOST,
            post: process.env.LOCAL_PORT,
            user: process.env.LOCAL_USER,
            password: process.env.LOCAL_PASSWORD,
            database: process.env.LOCAL_DATABASE,
        },
    searchPath: 'public',
    pool: {
        min:2,
        max:10,
    },
    migrations:{
        tableName: 'knex_migrations',
        directory: __dirname + '/db/migrations',
    },
    seeds:{
        directory: __dirname + '/db/seeds',
    }

}