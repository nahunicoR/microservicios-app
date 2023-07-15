const {Schema} = require('mongoose');

const characterSchema = new Schema({
    _id: String,
    name: String,
    heigh: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type: String, ref: 'Planet'},
    films: [{type: String, ref: 'Film'}],
});

characterSchema.statics.list = async function () {
    return await this.find()
    .populate('homeworld',['_id', 'name'])
    .populate('films',['_id', 'title']);
}

characterSchema.statics.get = async function(id){
    return await this.findById(id)
    .populate('homeworld',['_id', 'name'])
    .populate('films',['_id', 'title']);
}

characterSchema.statics.insert = async function(character){
    return await this.create(character);
}

characterSchema.statics.update = async function (_id, character) {
    const update = await this.updateOne({ _id }, character);
    return update;
  };
  
  characterSchema.statics.delete = async function (_id) {
    const deleted = await this.deleteOne({ _id });
    return deleted;
  };


module.exports = characterSchema;