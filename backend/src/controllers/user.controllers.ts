import User from '../models/user.models'
// const jwt = require('jsonwebtoken')
import * as jwt from "jsonwebtoken"
// exports.signup = async (req, res) => {
//     try {
//         const user = new User({

//         })
//     } catch (error) {
        
//     }
// }

class UserController {
    login = async (req, res) => {
        try {
            if (!req.body.email)
                return res.status(422).json({ msg: 'Hãy nhập tên đăng nhập' });
            if (!req.body.password)
                return res.status(422).json({ msg: 'Hãy điền mật khẩu' });
            const user: any = await User.findOne({email: req.body.email})
            if(user == null) 
                return res.status(401).json({ msg: 'Thông tin đăng nhập không hợp lệ' });
            console.log(req.body)
                if (!user.checkValidPassword(req.body.password))
                return res.status(401).json({ msg: 'Mật khẩu không chính xác' });
            const jwtToken = user.generateJWT();
            const userData = await User.findOne(
                { email: req.body.email },
                '-verifyCode -password -__v'
            )
            console.log('User logged in');
            console.log('Username: ' + userData.email);
            return res.status(200).json({
                user: userData,
                token: jwtToken
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({msg: error})
        }
    };

    signup = async (req, res) => {
        try {
            let email = req.body.email;
            let password = req.body.password;
            if (!req.body.email)
                return res.status(422).json({ msg: 'Hãy nhập tên đăng nhập' });
            if (!req.body.password)
                return res.status(422).json({ msg: 'Hãy điền mật khẩu' });
            const isExist: any = await User.findOne({email});
            if (isExist) {
                return res.status(409).json({ msg: 'Tài khoản đã tồn tại!' });
            }
            let user: any = new User({email});
            user.generatePassword(password);
            let savedUser = await user.save();
            return res.status(200).json({msg: "OK"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal server error"});
        }
    }

    autologin = async (req: Request, res) => {
        try {
            const accessTokenKey = process.env.JWT_KEY;
            let token = req.headers["authorization"].slice(7);
            if (!token||!jwt||!accessTokenKey) {
                return res.status(400).json({msg: "Bad Request!"});
            }
            let jwtUser:any = jwt.verify(token, accessTokenKey);
            let user = await User.findById(jwtUser.userId, "-password");
            return res.status(200).json({user});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal server error"});
        }
    }
}

export default UserController;

// exports.login = async (req, res) => {
//     try {
//         if (!req.body.email)
//             return res.status(422).json({ msg: 'Hãy nhập tên đăng nhập' });
//         if (!req.body.password)
//             return res.status(422).json({ msg: 'Hãy điền mật khẩu' });
//         const user = await User.findOne({email: req.body.email})
//         if(user == null) 
//             return res.status(401).json({ msg: 'Thông tin đăng nhập không hợp lệ' });
//         if (!user.checkValidPassword(req.body.password))
//             return res.status(401).json({ msg: 'Thông tin đăng nhập không hợp lệ' });
//         const jwtToken = user.generateJWT();
//         const userData = await User.findOne(
//             { email: req.body.email },
//             '-verifyCode -password -__v'
//         )
//         console.log('User logged in');
//         console.log('Username: ' + userData.email);
//         return res.status(200).json({
//             user: userData,
//             token: jwtToken
//         })
//     } catch (error) {
//         console.error(error)
//         return res.status(500).json({msg: error})
//     }
// };
