import { Outlet, Navigate } from "react-router-dom";
import { supabase } from "../src/supabase"
import React from "react";

export default function AuthRequired() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}