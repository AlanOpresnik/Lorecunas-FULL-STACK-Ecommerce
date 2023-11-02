import { useContext } from "react";
import { OfertsContext } from "../context/OfertsContext";

export const useOferts = () => {
  const { oferts, loading } = useContext(OfertsContext);
  return { oferts, loading };
};