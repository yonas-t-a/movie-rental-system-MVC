import UserModel from "../model/userModel.js"

export async function getUsers (req, res){
    try {
        const result= await UserModel.getAllUser()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send("Error in fetching the user")
    }
}
export async function getUserID   (req, res){
    const id = req.params.id
    try {
        const result = await UserModel.getUserbyId(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send('Error in fetching user with id')
    }
}
export async function createUser (req, res){
   const {name, email} = req.body;
   try {
    await UserModel.insertUser(name, email);    
    res.status(201).send('User sucessfully added');
   } catch (error) {
        res.status(500).send('Error in creating user')
   }
}
export async function updateUser (req, res){
    const id=req.params.id;
    try {
        const {name, email} = req.body;

        const updatedName = name || UserModel.userName;
        const updatedEmail = email || UserModel.userEmail;

        await UserModel.updateUser(updatedName, updatedEmail)
        res.status(200).send('The user is sucessfully updated')
    } catch (error) {
        res.status(500).send('Error while updating the user')
    }
}
export async function deleteUser (req, res){
    const id = req.params.id;
    try {
         await UserModel.deleteUser(id)
         res.status(200).send('The user is sucessfully delated')
    } catch (error) {
        res.status(500).send("Error While delating the user with the given Id")
    }
}