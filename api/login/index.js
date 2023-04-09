const express =require ("express");
const cors =require("cors");
const mongoose =require("mongoose");




const app = express();
app.use(express. json())
app .use(express.urlencoded())
app.use(cors());


const PorT =process.env.PORT || 8000;



mongoose.connect("mongodb://127.0.0.1:27017/LoginandRegister",{
    useNewUrlParser:true,
}).then(() => {
    console.log("Connention");
}).catch(() => {
    console.log("Not db connect");
})



//Routes

app.post("/login", async(req,res)=>{
    const {email ,password} =req.body
    try {
        const user = await User.findOne({ email:email });
        if (user) {
          if (password === user.password) {
            res.send({ message: "Login Done", user: user });
          } else {
            res.send({ message: "Password is not match" });
          }
        } else {
          res.send({ message: "User not registered" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
      }
      

    // User.findOne({email:email}).then((err ,user)=>{
    //     if(user){
    //             if(password === user.password){
    //                 res.send({message:"Login Done" ,user:user})
    //             }
    //             else{
    //                 res.send({message:"Password is not match"})
    //             }
    //     }else{
    //         res.send("User not Register")
    //     }
    // })
})


app.post("/register",(req,res)=>{
    const {name ,email ,password}=req.body

    User.findOne({email:email}).then((err,user)=>{
        if(user){
            res.send({message:"User is Alredy is Register"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save()
        }
    })



})

// Mongoose schema for the new user 

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User = new mongoose.model("User",userSchema)




// Get a list of all experiments
app.get('/experiments', async (req, res) => {
  // TODO: implement logic to retrieve all experiments from the database
  try {
    const experiments = await Experiment.find({});
    res.json(experiments);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
  
  res.send('List of experiments');
});

// Create a new experiment
app.post('/experiments', (req, res) => {
  const experiment = new Experiment(req.body); // Create a new experiment instance from the request body
  experiment.save()
  res.send(experiment);
  // .then((err, savedExperiment) => { // Save the experiment to the database
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send('Error saving experiment');
  //   } else {
  //     res.status(201).send(savedExperiment); // Return the saved experiment as the response
  //   }
  // });
});


// Get details for a specific experiment
app.get('/experiments/:experimentId', (req, res) => {
  const experimentId = req.params.experimentId;
  // TODO: implement logic to retrieve details for the specified experiment from the database
  res.send(`Details for experiment ${experimentId}`);
});

// Update an existing experiment
app.put('/experiments/:experimentId', (req, res) => {
  const experimentId = req.params.experimentId;
  // TODO: implement logic to update the specified experiment in the database
  res.send(`Experiment ${experimentId} updated`);
});

// Delete an experiment
app.delete('/experiments/:experimentId', (req, res) => {
  const experimentId = req.params.experimentId;
  // TODO: implement logic to delete the specified experiment from the database
  res.send(`Experiment ${experimentId} deleted`);
});




///Mongoose Schema for the experiment 

const experimentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: Number, min: 1, max: 5, required: true },
  subject: { type: String, enum: ['Physics', 'Chemistry', 'Biology', 'General Science'], required: true },
  image: { type: String, required: true },
  materials: [{ name: String, quantity: String }],
  safetyPrecautions: { type: String },
  instructions: [{ description: String, image: String }]
});

const Experiment = mongoose.model('Experiment', experimentSchema);

 

app.listen(PorT ,()=>{
    console.log("Server is running")
})