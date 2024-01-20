const express = require('express');
const router = express.Router();
const Person = require("../models/Person");

//POST method to add the person data
router.post("/", async (req, res) => {
    try {
      const data = req.body; //assuming the request body contains the person data
  
      //create a new person document using the Mongoose model
      const newPerson = new Person(data);
  
      //save the new person to the database
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  //GET method to get the person data
  router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //parameterized api (for work type)
router.get("/:workType", async (req, res) => {
    try {
      const workType = req.params.workType;
      if (workType == "chef" || workType == "manager" || workType == "waiter") {
        const response = await Person.find({ work: workType });
        console.log("respinse fetched");
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "Invalid Work Type" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.put('/:id', async(req, res)=> {
    try {
        const personId = req.params.id;  //extract the id from the URL parameter
        const updatedPersonData = req.body;  //updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new : true,  //Return the updated document
            runValidators: true,  //Run mongoose validation
        })

        if(!response) {
            return res.status(404).json({ error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
  })

  router.delete('/:id', async(req, res) => {
    try {
        const personId = req.params.id;  //extract the id from the URL parameter

        const response = await Person.findByIdAndDelete(personId);

        if(!response) {
            return res.status(404).json({ error: 'Person not found'});
        }

        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
  })

  //export module for export
module.exports = router;
