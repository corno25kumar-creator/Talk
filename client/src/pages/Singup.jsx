import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Signup() {
  
  const [signupData, setSignupData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card title="Signup">
      <Input
        label="Full Name"
        name="fullName"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />

      <Input
        label="Username"
        name="userName"
        placeholder="Enter your username"
        onChange={handleInputChange}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleInputChange}
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        onChange={handleInputChange}
      />

      <Button>Create Account</Button>

      <p className="text-sm mt-4">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-500 underline ml-2"
        >
          Login
        </Link>
      </p>
    </Card>
  );
}
