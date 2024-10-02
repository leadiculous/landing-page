"use server";

export type SubmitEmailState = {
  message: string;
  error?: boolean;
};

export async function submitEmail(
  referrer: string | undefined,
  _: SubmitEmailState,
  formData: FormData
): Promise<SubmitEmailState> {
  const email = formData.get("email")?.toString();

  if (!email) {
    return { message: "Email is required", error: true };
  }

  const body = {
    email,
    waitlist_id: +(process.env.NEXT_PUBLIC_GETWAITLIST_ID as string),
    metadata: {
      referrer,
    },
  };

  try {
    const res = await fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error("Invalid response received from getwaitlist.com");
    }

    const data = await res.json();

    console.log('new email submitted', data);

    return {
      message: "You have been added to the waitlist. Thank you for signing up!",
      error: false,
    };
  } catch (err: any) {
    console.error(err);
    return {
      message: `Failed to submit email: ${err?.message?.toLowercase() ?? 'unknown error'}. Please try again later.`,
      error: true,
    };
  }
}
