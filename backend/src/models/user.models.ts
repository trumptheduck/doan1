import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator'
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
const accessTokenKey = '6Jh(r-aux8q63Cb2+?~qM]Y9aQ:>Tpsk';
console.log(accessTokenKey)

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
    return jwt.sign(
        {
            email: this.email,
            userId: this._id
        },
        accessTokenKey,
    );
};
userSchema.methods.generatePassword = function (password) {
    this.password = bcrypt.hashSync(password, 10);
  };

userSchema.methods.checkValidPassword = function (password) {
    // return bcrypt.compareSync(password, this.password);
    return password === this.password
}
const User = mongoose.model('User', userSchema)
export default User;
