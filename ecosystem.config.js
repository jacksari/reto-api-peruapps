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
            "KEY_PATH": "",
            "CERT_PATH": "",
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
            "MONGO_DB": "mongodb+srv://jacksari:Shingekino123@cluster0.nclr5.mongodb.net/reto-peru",
            "JWT_SECRET": "JWT_SECRET",
            "KEY_PATH": "/etc/letsencrypt/live/api.jacksari.com/fullchain.pem",
            "CERT_PATH": "/etc/letsencrypt/live/api.jacksari.com/privkey.pem",
        }
      }
  ]
}