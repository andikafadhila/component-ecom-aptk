import { Text, Spinner, Button, Center } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
// import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.css";
import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* <Button
        fill={true}
        isDisabled={false}
        text={"Masuk"}
        icon={<FaBeer />}
        px="32"
        py="3"
      /> */}

      {/* <Button variant="fillCustom">hehe</Button> */}
      <Center>
        <ProductCard />
      </Center>
    </div>
  );
}
