import UserModel from "@/db/models/users";
import { NextResponse } from "next/server";
import { z } from "zod";

const User = z.object({
  username: z.string(),
  email: z.string().email({ message: "Email must be email format." }),
  password: z
    .string()
    .min(5, { message: "Password must be more than 4 characters." }),
  gender: z.string(),
});

type Body = z.infer<typeof User>;

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();

    const validation = User.safeParse(body);

    if (!validation.success) {
      throw validation.error;
    }

    const isUsername = await UserModel.userByUsername(body.username);
    const isEmail = await UserModel.userByEmail(body.email);

    if (isUsername) {
      return NextResponse.json(
        {
          message: "Username has been used. Username must be unique.",
        },
        {
          status: 400,
        }
      );
    }

    if (isEmail) {
      return NextResponse.json(
        {
          message: "Email has been used. Email must be unique.",
        },
        {
          status: 400,
        }
      );
    }

    const user = await UserModel.register(body);

    return NextResponse.json(
      {
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          gender: user.gender,
          role: user.role,
          image: user.image,
        },
      },
      {
        status: 201,
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
