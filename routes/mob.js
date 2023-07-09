const { 
    verifyTokenAndAdmin,
    verifyTokenAndAuthorize 
} = require('./verifyToken');

const router = require('express').Router();


// //CREATE
// router.post("/", verifyTokenAndAdmin, async (req, res) => {

// });

// //UPDATE
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

// });

// //DELETE
// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

// });
    
//GET ALL
router.get("/", async (req, res) => {
    try {
        fs = require('fs');
        fs.readFile('./data/mobs.json', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            const mobs = JSON.parse(data);


            res.json(mobs);
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;