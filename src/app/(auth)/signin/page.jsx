"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import bookImage from "../../../../public/image.jpg";

import { toast, Bounce } from "react-toastify";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (new_user) => {
    const { data, error } = await authClient.signIn.email({
      email: new_user.email,
      password: new_user.password,
    });

    if (error) {
      console.error("Login failed:", error.message);

      toast.error(
        error.message || "Invalid email or password. Please try again!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        },
      );
    } else {
      console.log("Login successful:", data);

      toast.success("Welcome back! Login successful.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }
  };

  return (
    <div className="flex h-screen container mx-auto mt-10 items-center justify-center">
      <div className="flex h-full w-full flex-row-reverse">
        <div className="relative m-auto flex w-full max-w-sm flex-col items-center p-8 outline-0 outline-border/40 outline-offset-0.5 sm:outline-2 dark:outline-border/80">
          <div className="absolute inset-x-0 top-0 w-[calc(100%+4rem)] -translate-x-8 border-t max-sm:hidden" />
          <div className="absolute inset-x-0 bottom-0 w-[calc(100%+4rem)] -translate-x-8 border-b max-sm:hidden" />
          <div className="absolute inset-y-0 left-0 h-[calc(100%+4rem)] -translate-y-8 border-s max-sm:hidden" />
          <div className="absolute inset-y-0 right-0 h-[calc(100%+4rem)] -translate-y-8 border-e max-sm:hidden" />

          <div className="absolute inset-x-0 -top-1 w-[calc(100%+3rem)] -translate-x-6 border-t max-sm:hidden" />
          <div className="absolute inset-x-0 -bottom-1 w-[calc(100%+3rem)] -translate-x-6 border-b max-sm:hidden" />
          <div className="absolute inset-y-0 -left-1 h-[calc(100%+3rem)] -translate-y-6 border-s max-sm:hidden" />
          <div className="absolute inset-y-0 -right-1 h-[calc(100%+3rem)] -translate-y-6 border-e max-sm:hidden" />

          <div className="">
            <Image
              className="rounded-2xl"
              src={bookImage}
              alt="pic"
              width={50}
              height={50}
            />
          </div>
          <p className="mt-4 font-medium text-xl">Log in to Shadcn UI Blocks</p>

          <Button className="mt-8 w-full gap-3">Continue with Google</Button>

          <div className="my-7 flex w-full items-center justify-center overflow-hidden">
            <Separator />
            <span className="px-2 text-sm">OR</span>
            <Separator />
          </div>

          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                    placeholder="Email"
                    type="email"
                    {...field}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Button
              className="mt-4 w-full bg-gray-900 text-white"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Logging in..." : "Continue Login"}
            </Button>
          </form>

          <div className="mt-5 space-y-5">
            <p className="text-center text-sm">
              Don&apos;t have an account?
              <Link
                className="ml-1 text-muted-foreground underline"
                href="/signup"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        <div className="relative hidden w-full max-w-2xl grow border-r bg-muted lg:block">
          <Image
            alt="Login"
            className="absolute inset-0 size-full object-cover"
            src={bookImage}
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
