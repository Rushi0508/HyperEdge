import prisma from "@/app/libs/prismadb"
import nodemailer from 'nodemailer'
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
){
    const body = await req.json()
    const {role,fname,lname,email,password} = body;
    if(!role || !fname || !lname || !email || !password){
        return NextResponse.json({message: "Fill out all details"})
    }
    try{
        const otp = `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`;

        // mail configrations
        let config = {
            service: "gmail",
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS
            }
        }

        let transporter = nodemailer.createTransport(config);
        const mailoptions = {
            from: '"HyperEdge" <hyperedge@gmail.com>',
            to: email,
            subject: "Verify your Email",
            html: `
                <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                    <div style="margin:2px auto;width:90%;padding:0px 0">
                    <div style="border-bottom:1px solid #eee">
                        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">HyperEdge</a>
                    </div>
                    <p style="font-size:1.2em">Hi, <i><b>${fname + " " + lname}</b></i></p>
                    <p style="font-size:1.1em">Use the following OTP to complete your Sign Up procedures. OTP is valid for 15 minutes</p>
                    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
                    <p style="font-size:1em;">Regards,<br />HyperEdge</p>
                    <hr style="border:none;border-top:1px solid #eee" />
                    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                        <p>HyperEdge Inc</p>
                        <p>India</p>
                    </div>
                    </div>
                </div>
            `
        }
        await transporter.sendMail(mailoptions);
        return NextResponse.json({status: true})
    } catch (errors: any) {
        console.log(errors)
        return NextResponse.json({status: false, errors: errors})
    };
}