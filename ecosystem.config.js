module.exports = {
  apps : [
      {
        name: "api",
        script: "./dist/index.js",
        watch: true,
        env: {
            "PORT": 80,
            "NODE_ENV": "development",
            "MONGO_DB": "mongodb+srv://jacksari:Shingekino123@cluster0.nclr5.mongodb.net/reto-peru",
            "JWT_SECRET": "JWT_SECRET",
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
            "MONGO_DB": "mongodb+srv://jacksari:Shingekino123@cluster0.nclr5.mongodb.net/reto-peru",
            "JWT_SECRET": "JWT_SECRET",
        }
      }
  ]
}