
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LoginForm: React.FC = () => {
  const [userType, setUserType] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Login Attempted",
      description: `Attempted login as ${userType}: ${username}`,
    });
    
    // In a real application, you would handle authentication here
  };

  return (
    <Card className="w-full max-w-md university-card fade-in-element">
      <CardHeader className="space-y-1">
        <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-university-blue to-university-purple flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7v-2zm3-3h4v2h-4V8zm0 6h4v2h-4v-2z"/>
          </svg>
        </div>
        <CardTitle className="text-2xl font-bold text-center text-gray-800 font-poppins">Welcome Back!</CardTitle>
        <CardDescription className="text-center text-gray-600">
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2 fade-in-delay-1">
            <label htmlFor="userType" className="text-sm font-medium text-gray-700">
              Login as:
            </label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger id="userType" className="w-full bg-white form-input-animated">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2 fade-in-delay-1">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
              Username:
            </label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="university-form-input bg-white form-input-animated"
            />
          </div>
          
          <div className="space-y-2 fade-in-delay-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password:
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="university-form-input pr-10 bg-white form-input-animated"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-university-purple to-university-blue hover:from-university-blue hover:to-university-purple text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] fade-in-delay-2 mt-6"
          >
            <LogIn className="mr-2 h-4 w-4" /> Sign In
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-sm text-center text-gray-600">
          Don't have an account? 
          <a href="/signup" className="ml-1 text-university-blue hover:underline font-medium">
            Sign up
          </a>
        </div>
        <div className="text-sm text-center">
          <a href="/forgot-password" className="text-university-purple hover:underline">
            Forgot password?
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
