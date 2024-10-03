import { readdir, readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { ImageResponseOptions, NextResponse } from "next/server";
import { join } from "path";
import { PropsWithChildren } from "react";

export async function GET() {
  /* const fontData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/DMSans-Regular.ttf`
  ).then((res) => res.arrayBuffer());  */
  const fonts = await readFonts(join("src", "app", "api", "og", "_fonts"));

  // This endpoint should only be available in development mode.
  // We don't need to expose this in production because we don't need dynamic OG images.
  // Instead, we generate the OG image once and copy it to the `public` folder.
  if (!process.env.NODE_ENV.startsWith("dev")) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  // The returned element here is based on the Hero component.
  // CSS has been manually copied over from the browser dev tools.
  // Unfortunately tailwind support is still experimental and doesn't work well enough yet.
  return new ImageResponse(
    (
      <BackgroundGradient>
        <Eclipse />
        <Overlay>
          <Center>
            <h1
              style={{
                display: "flex",
                fontSize: "6rem",
                lineHeight: "1",
                fontWeight: "700",
                textAlign: "center",
                margin: "0",
                textShadow: "5px 5px black",
              }}
            >
              Realtime lead finder
            </h1>
            <h2
              style={{
                display: "flex",
                fontSize: "2.5rem",
                lineHeight: "1",
                fontWeight: "400",
                textAlign: "center",
                margin: "0",
                textShadow: "5px 5px black",
              }}
            >
              Discover new customers on social media
            </h2>
          </Center>
        </Overlay>
      </BackgroundGradient>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
      // debug: true,
    }
  );
}

function BackgroundGradient({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: "flex",
        background:
          "linear-gradient(to bottom, rgb(0, 0, 0), rgb(32, 13, 66) 34%, rgb(79, 33, 161) 65%, rgb(164, 110, 219) 82%)",
        color: "white",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}

function Eclipse() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        backgroundImage:
          "radial-gradient(closest-side, rgb(0, 0, 0) 82%, rgb(149, 96, 235))",
        borderBottomColor: "rgb(180, 140, 222)",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "rgb(180, 140, 222)",
        borderBottomLeftRadius: "100%",
        borderBottomRightRadius: "100%",
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
        // boxSizing: "border-box",
        color: "white",
        height: "768px",
        left: "874.5px",
        position: "absolute",
        // tabSize: "4",
        top: "376px",
        transform: "translate(-1000px, 0)", // "matrix(1, 0, 0, 1, -1200, 0)",
        width: "2400px",
      }}
    />
  );
}

function Overlay({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        /* maxWidth: "1280px",
        width: "100%", */
        width: "1000px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        // backgroundColor: "black",
      }}
    >
      {children}
    </div>
  );
}

function Center({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

type ArrayItem<T> = T extends (infer U)[] ? U : never;
type Fonts = ImageResponseOptions["fonts"];
type Font = ArrayItem<Fonts>;

export async function readFonts(dirPath: string): Promise<Fonts> {
  try {
    const files = await readdir(dirPath);

    const fonts = await Promise.all(
      files.map(async (file) => {
        const filePath = join(dirPath, file);
        const fileContents = await readFile(filePath);

        const style: Font["style"] = filePath.includes("Italic")
          ? "italic"
          : "normal";
        let weight: Font["weight"] = 400;
        if (filePath.includes("Thin")) {
          weight = 100;
        } else if (filePath.includes("ExtraLight")) {
          weight = 200;
        } else if (filePath.includes("Light")) {
          weight = 300;
        } else if (filePath.includes("Regular")) {
          weight = 400;
        } else if (filePath.includes("Medium")) {
          weight = 500;
        } else if (filePath.includes("SemiBold")) {
          weight = 600;
        } else if (filePath.includes("Bold")) {
          weight = 700;
        } else if (filePath.includes("ExtraBold")) {
          weight = 800;
        } else if (filePath.includes("Black")) {
          weight = 900;
        }

        return { name: file, data: fileContents, style, weight } satisfies Font;
      })
    );

    return fonts;
  } catch (error: any) {
    console.error(`Error reading directory: ${error.message}`);
    throw error;
  }
}
