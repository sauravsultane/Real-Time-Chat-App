import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ShipWheelIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { axiosInstance } from "../lib/axios";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const queryClient  = useQueryClient();

  const {mutate, isPending, error} = useMutation({
    mutationFn:async()=>{
      const respose = await axiosInstance.post("/auth/signup",signupData);
      return respose.data;
    },
    onSuccess:()=> queryClient.invalidateQueries({queryKey:["authUser"]}),

  })

  const handleSignup = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 w-full max-w-lg bg-base-100 rounded-xl shadow-lg p-6 sm:p-8">

        {/* Logo */}
        <div className="mb-6 flex items-center gap-2">
          <ShipWheelIcon className="size-9 text-primary" />
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
            ChatApp
          </span>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">

          <div>
            <h2 className="text-xl font-semibold">Create an Account</h2>
            <p className="text-sm opacity-70">
              Join ChatApp and start building connections!
            </p>
          </div>

          <div className="space-y-3">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Name Surname"
                className="input input-bordered"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="user@gmail.com"
                className="input input-bordered"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs opacity-70 mt-1">
                Password must contain 6 characters
              </p>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" required />
                <span className="text-xs leading-tight">
                  I agree to{" "}
                  <span className="text-primary hover:underline">
                    terms of service
                  </span>{" "}
                  and{" "}
                  <span className="text-primary hover:underline">
                    Privacy Policy
                  </span>
                </span>
              </label>
            </div>

          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            {isPending?"Signing up...":"Create Account"}
          </button>

          <p className="text-sm text-center mt-4">
            If already have an account{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
