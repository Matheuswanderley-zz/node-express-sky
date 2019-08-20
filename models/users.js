const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];


const Schema = mongoose.Schema;

const userSchema = new Schema({
  nome:{
    type: String,
    required: true,
    trim: true,
},
email: {
    type: String,
    required: true,
    trim: true,
    unique: true
},
senha: {
    type: String,
    required: true,
    trim: true,

},
telefones :[
    {
        numero:{
            type: String,
            require: true,
            trim: true,
            unique: true
        },
        ddd: {
            type: String,
            require: true,
            trim: true
        }
    }
],
timestamp: {
     type: Date, 
     default: Date.now,
    },
    updated_at: { 
        type: Date 
    }
});


userSchema.pre('save', function(next) {
  const user = this;
  if(!user.isModified || !user.isNew) {
    next();
  } else {
    bcrypt.hash(user.senha, stage.saltingRounds, function(err, hash) {
      if (err) {
        console.log('Erro ao encriptar a senha', user.nome);
        next(err);
      } else {
        user.senha = hash;
        next();
      }
    });
  }
});

module.exports = mongoose.model('User', userSchema); // instance of schema