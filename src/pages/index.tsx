import { signOut, useSession, signIn } from 'next-auth/react';
import prisma from '@/lib/prismadb';
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.product.findMany();
  return {
    props: { feed }
  };
};


const IndexPage = ({feed}) => { 
  const { data: session} = useSession();
  console.log("session" ,session);
  console.log("feed" ,feed);


  if (session) {
    return (
      <div>
        Hello, {session.user.name}, <img src={session.user.image} width="30px" height="30px" style={{borderRadius: "50%"}}/>  <br />
        <button onClick={() => signOut()}>Déconnexion</button>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn("auth0")}>Se connecter</button>
        <img src={feed[0].image}/>
      </div>
    );
  }
};

export default IndexPage;