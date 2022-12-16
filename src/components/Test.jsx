import { useState, useEffect } from "react";
import Card from ",/Card";
import useCounter from "../hooks/use-counter";
const BackwardCounter = () => {
  useCounter(false);
  return <Card>{counter}</Card>;
};
export default BackwardCounter;
