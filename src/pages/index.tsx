import { prisma } from "@/lib/prisma";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { FC, useState } from "react";

type User = {
  id: string
  description: string
}
interface DataProps{
  data: User[]
}

export const getServerSideProps:GetServerSideProps = async () => {
  const data = await prisma.user.findMany();
  return {
    props: { data },
  };
};

c

export default function Home(props:DataProps) {
    return (
    <main className={`flex min-h-screen flex-col items-center justify-center`}>
      CRUD app test
    {props.data.map((prop) => (<div>{prop.description}</div>))}
    </main>
  );
}
