const { json } = require("express");
const { readFileSync } = require("fs");
const path = "public/users.json";

const jsonString = readFileSync(path);
const users = JSON.parse(jsonString);

const getAllUsers = (req, res) => {
  const { limit } = req.query;
  const data = users.slice(0, limit);
  res.send(data);
};

const getRandomUser = (req, res) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  res.send(randomUser);
};

const saveUser = (req, res) => {
  const newUser = req.body;
  const { id, name, gender, contact, photoUrl, address } = newUser;
  if (id && name && gender && contact && photoUrl && address) {
    users.push(newUser);
    return res.send(users);
  }

  res.send("Sorry, You didn't give all the information");
};

const updateUser = (req, res) => {
  const givenId = req.params.id;
  const { name, gender, contact, address, photoUrl, id } = req.body;

  if (givenId == id) {
    const updateUser = users.find((user) => user.id == id);
    updateUser.id = id;
    updateUser.name = name;
    updateUser.gender = gender;
    updateUser.address = address;
    updateUser.photoUrl = photoUrl;
    updateUser.contact = contact;
    return res.send(updateUser);
  }

  res.send("Sorry you haven't valid id");
};

const updateMultipleUser = (req, res) => {
  const givenUsers = req.body;

  users.forEach(obj1 => {
    const obj2 = givenUsers.filter(obj2 => obj2.id === obj1.id)[0];
    if (obj2) {
      obj1.contact = obj2.contact;
    }
  });
  
  res.send(users)
};

module.exports = {
  getAllUsers,
  getRandomUser,
  saveUser,
  updateUser,
  updateMultipleUser,
};
