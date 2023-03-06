import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator'
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
    {
        email: {type: String, require: true, unique: true},
        password: {type: String, require: true},
        // role: {type: String, required: false, default: 'admin', enum: ['admin']},

    },
    {
        collection: 'users'
    }
)

userSchema.plugin(uniqueValidator);
userSchema.methods.generateJWT = function () {
    const accessTokenKey = process.env.JWT_KEY;
    console.log(accessTokenKey)
    return jwt.sign(
        {
            email: this.email,
            userId: this._id
        },
        accessTokenKey,
    );
};
userSchema.methods.generatePassword = function (password) {
    this.password = bcrypt.hashSync(password.toString(), 10);
  };

userSchema.methods.checkValidPassword = function (password) {
    return bcrypt.compareSync(password.toString(), this.password);
}
const User = mongoose.model('User', userSchema)
export default User;
