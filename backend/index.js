import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"

dotenv.config()

const app = express()
app.use(express.json())

app.use("/api/auth", authRouter)

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Server running")
})

app.listen(PORT, () => {
  connectDb()
  console.log(`Server running on port ${PORT}`)
})