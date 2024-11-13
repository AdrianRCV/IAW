import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <img src="/header.jpg" width="500" height="400" alt="ejemplo de imagen"></img>
      <Image src="/header.jpg" width="500" height="400" alt="ejemplo de imagen"/>
    </div>
  );
}
