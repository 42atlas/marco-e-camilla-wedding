import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
    name: string
    nametwo: string
    alle: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests are allowed" })

    }

    const body = req.body as SheetForm

    try {
        //prepare auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
            },
            scopes: [
            "https://www.googleapis.com/auth/spreadsheets",
            "https://www.googleapis.com/auth/drive",
            "https://www.googleapis.com/auth/drive.file"
            ]
        }); 

        const sheets = google.sheets({ version: "v4", auth });

        //prepare data

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "A1:C1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [body.name, body.nametwo, body.alle]
                ]
            }
        })

        return res.status(200).json({ data: response.data })

    } catch (e) {
        console.error(e)
        return res.status(500).send({ message: "Something went wrong"})
        
    }
}