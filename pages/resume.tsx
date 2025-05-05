// pages/resume.tsx
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/Phoenix_Sheppard_Resume.pdf",
      permanent: false,
    },
  };
};


export default function Resume() {
  return null; // this page won't actually render
}