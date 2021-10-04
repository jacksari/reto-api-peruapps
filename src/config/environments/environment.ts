export default {
    PORT: process.env.PORT || 5000,
    DB: {
        MONGO_DB: process.env.MONGO_DB || ''
    },
    JWT_SECRET: process.env.JWT_SECRET || 'ASD',
}