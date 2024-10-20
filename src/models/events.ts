import mongoose from 'mongoose';
const { Schema } = mongoose;
/*
                Schema used to define how events look 
    -------- Be extremely careful altering these schemas --------
*/
const eventSchema = new Schema({
    
});

/*
    Convert our schema to a model for use in our business logic
*/
export default mongoose.model('Event', eventSchema);