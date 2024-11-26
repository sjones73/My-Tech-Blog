const router = require("express").Router()

// routes
router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "./public/index.html"))
    res.render("home")
})


router.get("/login", (req, res) => {
    // res.sendFile(path.join(__dirname, "./public/login.html"))
    res.render("login")

})

router.get("/dashboard", (req, res) => {
    res.render("dashboard")

})

module.exports = router;