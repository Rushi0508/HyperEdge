import prisma from "@/app/libs/prismadb"
import nodemailer from 'nodemailer'
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import generateRandomToken from "@/app/utils/randomToken";

export async function POST(
    req: Request,
){
    const body = await req.json()
    const {role,fname,lname,email,password} = body;
    if(!role || !fname || !lname || !email || !password){
        return NextResponse.json({message: "Fill out all details"})
    }
    try{
        // If the email already exists in any model.
        const creator = await prisma.creator.findUnique({
            where: {
                email: email
            }
        });
        const brand = await prisma.brand.findUnique({
            where: {
                email: email
            }
        });
        let user, host;
        if(creator || brand){
            if(creator && !creator.emailVerified){
                user = creator;
                host = process.env.NODE_ENV==='development'? process.env.CREATOR_HOST_LOCAL : process.env.CREATOR_HOST_PROD
            }else if(brand && !brand.emailVerified){
                user = brand;
                host = process.env.NODE_ENV==='development'? process.env.BRAND_HOST_LOCAL : process.env.BRAND_HOST_PROD
            }
            else{
                return NextResponse.json({status: false, message: "Email is already registered"})
            }
        }
        // Create new user then
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            if(role=="0"){
                host = process.env.NODE_ENV==='development'? process.env.CREATOR_HOST_LOCAL : process.env.CREATOR_HOST_PROD
                user = await prisma.creator.create({
                    data: {
                        email: email,
                        password: hashedPassword,
                        fullName: fname + " " + lname,
                    },
                })
            }else{
                host = process.env.NODE_ENV==='development'? process.env.BRAND_HOST_LOCAL : process.env.BRAND_HOST_PROD
                user = await prisma.brand.create({
                    data: {
                        email: email,
                        password: hashedPassword,
                        personName: fname + " " + lname,
                    }
                })
            }
        }

        const userId = user.id
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24);

        const token = generateRandomToken(24);
        const link = `${host}/verify-email?token=${token}&id=${userId}&role=${role}`

        const userVerification = await prisma.userVerification.create({
            data: {
                userId: userId,
                role: role=="0"? "Creator" : "Brand",
                link: link,
                expiresAt: expiresAt
            }
        })

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
                    <p style="font-size:1.1em">Thank you for registering with HyperEdge. To ensure the security of your account, we kindly ask you to verify your email address by clicking the button below. After verification, you can proceed to complete your profile and begin your journey on HyperEdge.</p>
                    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 20px;color: #fff;border-radius: 4px;">
                    <a href='${link}' style="color: white; text-decoration: none"> Verify Here </a>
                    </h2>
                    <p style="font-size:1em">Please note that the verification link will expire within 24 hours.</p>
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