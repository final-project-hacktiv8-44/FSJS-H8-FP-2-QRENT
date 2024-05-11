import { verifyPassword } from "@/db/helpers/bcrypt";
import { SignToken } from "@/db/helpers/jwt";
import UserModel from "@/db/models/users";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

const User = z.object({
  email: z.string().email({ message: "Email must be email format." }),
  password: z
    .string()
    .min(5, { message: "Password must be more than 4 characters." }),
});

type Body = z.infer<typeof User>;

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();

    const validation = User.safeParse(body);

    if (!validation.success) {
      throw validation.error;
    }

    const user = await UserModel.userByEmail(body.email);
    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const isPassword = verifyPassword(body.password, user.password);
    if (!isPassword) {
      return NextResponse.json(
        {
          message: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const access_token = SignToken({
      _id: user._id,
      email: user.email,
      role: user.role,
    }) as string;

    cookies().set("Authorization", `Bearer ${access_token}`);

    return NextResponse.json(
      {
        access_token,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const pathError = error.issues[0].path[0];
      const messageError = error.issues[0].message;

      return NextResponse.json(
        {
          message: `${pathError} ${messageError.toLocaleLowerCase()}`,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      {
        message: `Internal server error`,
      },
      {
        status: 500,
      }
    );
  }
}
