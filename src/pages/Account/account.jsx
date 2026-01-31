import { Camera, LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { jwtDecode } from "jwt-decode";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { getUserById, putUpdateUser } from "@/api/userProfileApi/useProfileApi";

const Account = () => {
   const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (data?.sid) dispatch(getUserById(data.sid));
  }, [dispatch, data?.sid]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("FirstName", e.target.firstName.value);
    formData.append("LastName", e.target.lastName.value);
    formData.append("Email", e.target.email.value);
    formData.append("PhoneNumber", e.target.phoneNumber.value);
    formData.append("Dob", e.target.dob.value);

    dispatch(putUpdateUser(formData));
  };
  

  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Account</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-white rounded-2xl shadow-xl p-8 grid lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-4">
          

          <h2 className="text-xl font-bold capitalize">
            {data.name}
          </h2>

          <Button
            variant="destructive"
            className="mt-6 w-full"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            <LogOut className="mr-2" /> Log Out
          </Button>
        </div>

        <form
          onSubmit={submitHandler}
          className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <h1 >{data.name}</h1>
          </Field>

          <Field>
            <FieldLabel>Gmail</FieldLabel>
            <h1 >{data.email}</h1>
          </Field>

         
        </form>
      </div>
    </main>
  );
};

export default Account;
