import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const SANITY_API_URL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.SANITY_DATASET}`;
const SANITY_API_TOKEN = process.env.SANITY_EDIT_CONTENT_TOKEN;
const DOCUMENT_TYPE = "newsletter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

    const mutations = [
      {
        create: {
          _type: DOCUMENT_TYPE,
          ...body,
        },
      },
    ];

    const response = await axios.post(
      SANITY_API_URL,
      { mutations },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SANITY_API_TOKEN}`,
        },
      }
    );

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || "Sanity API error"
      : (error as Error).message || "Unexpected error";

    return NextResponse.json(
      {
        success: false,
        message,
        error: axios.isAxiosError(error) ? error.response?.data : error,
      },
      {
        status: axios.isAxiosError(error) ? error.response?.status || 500 : 500,
      }
    );
  }
}
