import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// typescript ka blue print (interface define karo )
interface formValues {
  username: string;
  name: string;
}
export const SignIn = () => {
  // difine the schema object ( acts as a bouncer)
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("userName is required")
      .matches(/^[a-zA-Z0-9_.@$]+$/, "Invalid Username"),
    name: yup.string().required("Ofc Name is Required"),
  });
  // handle submit ka logic
  const onSubmitFunction: SubmitHandler<formValues> = (data, event) => {
    event?.preventDefault();
    const { username, name } = data;
    console.log(username, name);
  };

  // When you call resolver , useForm hands over the validation logic to external validation library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({ resolver: yupResolver(schema) });

  return (
    <div className="Sign-In">
      <h1>Hello Welcome To Anirudh Audio chat</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label htmlFor="userName" id="userName">
            Username:
          </label>

          <input type="text" {...register("username")} />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="name" id="name">
            Name:
          </label>
          <input type="text" {...register("name")}></input>
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
