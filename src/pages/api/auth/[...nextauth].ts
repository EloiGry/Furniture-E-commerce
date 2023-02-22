import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from "next-auth" ;
import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0";
import prisma from "../../../lib/prismadb"

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;



const options: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};