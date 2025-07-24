import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        ok: true,
        env: process.env.NODE_ENV,
    });
}

export async function POST(request: NextRequest) {
    const formData = await request.formData();

    const data = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password")
    }

    return NextResponse.json({
        json: data,
    });
}