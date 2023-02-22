import { signOut, useSession, signIn } from 'next-auth/react';
import prisma from '@/lib/prismadb';
import type { GetServerSideProps } from "next";
import Header from '@/layout/Header';

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
    return (
      <>
        <Header/>
      </>
    )
  };

export default IndexPage;