var mongoose = require('mongoose');

var DinerSchema = new mongoose.Schema({
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },

});

mongoose.model('Diner', DinerSchema);
// DinerSchema.path('first_name').required(true, "First name required!");
// DinerSchema.path('last_name').required(true, "Last name required!");
// DinerSchema.path('email').required(true, "Email required!");
// DinerSchema.path('password').required(true, "Password required!");
// DinerSchema.path('confirm').required(true, "Confirm password!");
