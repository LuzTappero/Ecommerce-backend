import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';;

interface AuthenticatedUser{
    user_id: string;
    username: string;
    email?: string;
    role: 'admin' | 'client';
}
interface UserRequest extends Request {
    user?: AuthenticatedUser;
}

export const signToken = (user: AuthenticatedUser)=>{
    try{
        return jwt.sign(
            { userId: user.user_id, username: user.username, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
    }catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Token generation failed');
    }
}

