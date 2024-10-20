import mongoose from 'mongoose';
const { Schema } = mongoose;
/*
                Schema used to define how users look 
    -------- Be extremely careful altering these schemas --------
*/
const userSchema = new Schema({
    email: { 
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: { // this will not be a plaintext password, instead encrypted
        type: String,
        required: true
    },
    events: [ // will store an individual users events, not main store of all user submitted events
        {
            eventId: Schema.Types.ObjectId,
            ref: 'Events',
            required: true
        }
    ],
});

/*
    Convert our schema to a model for use in our business logic
*/
export default mongoose.model('User', userSchema);