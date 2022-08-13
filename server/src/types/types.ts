interface JsonResponse {
  success: boolean;
  message: string;
  data?: any;
}

interface TokenPayload {
  exp: number;
  id: string,
  passwordHash: string,
}

interface User {
  id: string,
  username: string, 
  passwordHash?: string,
}

interface Card {
  id: string,
  answer?: string, 
  question?: string
}

export {
  JsonResponse,
  TokenPayload,
  User,
  Card,
}