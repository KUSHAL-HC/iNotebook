const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Notes = require('../modules/Notes');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get All the Notes using GET "/api/notes/getuser".Login required
router.get('/fetchallnotes',fetchuser,async (req, res) => {
  const notes = await Notes.find({user:req.user.id});
  res.json(notes);
});

//ROUTE 2:Get All the Notes using post "/api/notes/addnotes"
router.post('/addnote',fetchuser,[
  body('title').isLength({ min: 3 }),
  body('description').isLength({min:5}),
],async (req, res) => {
  try{

    const {title,description,tag} = req.body;
    //if there are errors ,return bad requests and errors
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({title,description,tag,user:req.user.id})
        const savedNote = await note.save();
  res.json(savedNote);
  }catch(error){
      res.status(500).json({ error: "Server error" });
  }
});



//ROUTE 3:updating the Notes of specific user post "/api/notes/updatenote".Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {

  const { title, description, tag } = req.body;

  const newNote = {};

  if (title) { newNote.title = title };
  if (description) { newNote.description = description };
  if (tag) { newNote.tag = tag };

  // Find the note
  let note = await Notes.findById(req.params.id);

  if (!note) {
    return res.status(404).send("Note Not Found");
  }

  // Allow update only if user owns the note
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );

  res.json({ note });
});
module.exports = router;