import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "expo-router";

export default function Index() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/(tabs)" />;
}