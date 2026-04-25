import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "http://18.188.181.103",
      permanent: false,
    },
  };
};

export default function Push2Prod() {
  return null;
}
