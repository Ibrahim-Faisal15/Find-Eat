import { useContext } from "react";
import { context } from "../store/store";

export default function Recipes() {
  let { recepiesID } = useContext(context);
  console.log(recepiesID);
  return <></>;
}
