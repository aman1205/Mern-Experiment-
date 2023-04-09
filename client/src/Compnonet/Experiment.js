import React, { useState } from "react";
import "../styles/experiment.css"
function AdminPortal() {
  const [experiments, setExperiments] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [subject, setSubject] = useState("Physics");
  const [image, setImage] = useState("");
  const [materials, setMaterials] = useState([]);
  const [safetyPrecautions, setSafetyPrecautions] = useState("");
  const [instructions, setInstructions] = useState([]);

  const addExperiment = () => {
    const newExperiment = {
      name: name,
      description: description,
      difficulty: difficulty,
      subject: subject,
      image: image,
      materials: materials,
      safetyPrecautions: safetyPrecautions,
      instructions: instructions
    };

    setExperiments([...experiments, newExperiment]);
    console.log(experiments)
  };

  const addMaterial = () => {
    setMaterials([...materials, { name: "", quantity: "" }]);
  };

  const handleMaterialChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...materials];
    list[index][name] = value;
    setMaterials(list);
  };

  const addInstruction = () => {
    setInstructions([...instructions, { stepNumber: instructions.length + 1, image: "", description: "" }]);
  };

  const handleInstructionChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...instructions];
    list[index][name] = value;
    setInstructions(list);
  };

  return (
    <div className="admin-page">
      <h1>Admin Portal</h1>
      <form className="form">
        <h2>Add Experiment</h2>
        <div className="form-input container">
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-input container">
          <label>Description: </label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-input container">
          <label>Difficulty: </label>
          <input type="number" min="1" max="5" value={difficulty} onChange={(e) => setDifficulty(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Subject: </label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="General Science">General Science</option>
          </select>
        </div>
        <div className="form-input container">
          <label>Image: </label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="form-input material">
          <h3>Materials</h3>
          <input type="text" name="name" value={materials.name} onChange={(e) => handleMaterialChange( e)} placeholder="Material Name" />
          <input type="text" name="quantity" value={materials.quantity} onChange={(e) => handleMaterialChange(e)} placeholder="Material Quantity" />

          
          {materials.map((material, index) => (
            <div key={index} >
              <input type="text" name="name" value={material.name} onChange={(e) => handleMaterialChange(index, e)} placeholder="Material Name" />
              <input type="text" name="quantity" value={material.quantity} onChange={(e) => handleMaterialChange(index, e)} placeholder="Material Quantity" />
            </div>
          ))}
          <button className="material-button" onClick={addMaterial}>Add Material</button>
        </div>
        <div className="form-input container">
          <label>Safety Precautions: </label>
          <textarea value={safetyPrecautions} onChange={(e) => setSafetyPrecautions(e.target.value)} />
        </div>
        <div>
          <h3>Instructions</h3>
          {instructions.map((instruction, index) => (
            <div key={index} className="form-input container">
              <label>Step {instruction.stepNumber}: </label>
              <input type="text" name="image" value={instruction.image} onChange={(e) => handleInstructionChange(index, e)} placeholder="Image URL" />
              <textarea name="description" value={instruction.description} onChange={(e) => handleInstructionChange(index, e)} placeholder="Description" />
            </div>
          ))}
          <button onClick={addInstruction}>Add Instruction</button>
        </div>
        <button className="add-experiment "  onClick={addExperiment}>Add Experiment</button>
      </form>
    
    </div> 
    

        
   
  )}

  export default AdminPortal;
