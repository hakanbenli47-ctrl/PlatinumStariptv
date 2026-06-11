import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    "";

  if (country.toUpperCase() === "TR") {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Access Restricted</title>
          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: radial-gradient(circle at top, #1b1b3a, #050514 60%);
              color: #ffffff;
              font-family: Arial, sans-serif;
              text-align: center;
              padding: 24px;
            }

            .box {
              width: 100%;
              max-width: 520px;
              padding: 42px 28px;
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 24px;
              background: rgba(255, 255, 255, 0.06);
              backdrop-filter: blur(16px);
              box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
            }

            h1 {
              margin: 0 0 14px;
              font-size: 34px;
              letter-spacing: -0.5px;
            }

            p {
              margin: 0;
              color: #c9c9d8;
              font-size: 16px;
              line-height: 1.7;
            }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>Access Restricted</h1>
            <p>This service is not available for visitors from your region.</p>
          </div>
        </body>
      </html>
      `,
      {
        status: 403,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};