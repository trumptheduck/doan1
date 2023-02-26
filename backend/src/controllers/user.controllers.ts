import User from '../models/user.models'
const jwt = require('jsonwebtoken')
const accessTokenKey = process.env.JWT_KEY;

// exports.signup = async (req, res) => {
//     try {
//         const user = new User({

//         })
//     } catch (error) {
        
//     }
// }

class userController {
    login = async (req, res) => {
        try {
            if (!req.body.email)
                return res.status(422).json({ msg: 'Hãy nhập tên đăng nhập' });
            if (!req.body.password)
                return res.status(422).json({ msg: 'Hãy điền mật khẩu' });
            const user = await User.findOne({email: req.body.email})
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
}

export default userController;

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
