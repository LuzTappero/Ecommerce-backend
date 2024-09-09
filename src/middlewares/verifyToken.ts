import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET as string ;

interface AuthenticatedUser{
  user_id: string;
  username: string;
  email?: string;
  role: 'admin' | 'client';
}
interface UserRequest extends Request {
  user?: AuthenticatedUser;
}

export async function verifyToken(req: UserRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try{
    const authHeader = req.headers["authorization"]
    const token= authHeader && authHeader.split(" ")[1]
    console.log(token)
    if (!token){
      res.status(401).json({message: 'Access not authorized'})
      return
    }
    jwt.verify(token, JWT_SECRET, (err:any, decoded: string | JwtPayload | undefined) => {
      if (err) {
        console.error("Error de verificación de JWT:", (err as Error).message);
        if (err.name === 'TokenExpiredError') {
          console.log("El token ha expirado.");
        } else if (err.name === 'JsonWebTokenError') {
          console.log("Token inválido.");
        }
        return res.sendStatus(403);
      }
      if (decoded && typeof decoded === 'object' && 'userId' in decoded){
        req.user = {
          user_id: decoded.userId,
          username: decoded.username,
          email: decoded.email,
          role: decoded.role,
      } as AuthenticatedUser;
        return next();
      }
      res.status(403).json({ message: 'Invalid token structure' });
    })
  }catch(error){
    console.log(error)
    next()
  }
}