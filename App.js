import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}
