import { error } from "console";
import {revalidateTag } from "next/cache";
import { env } from "process";

export async function POST(request: Request){
    const body = await request.json();
    const {tag, token} = body;
    
    if(!tag || !token){
        return Response.json({error: "Missing tag or token"},{status : 400});
    }
    
    // Verificar se es eel token
    if(token !== env.CACHE_TOKEN ){
        return Response.json({error: "Invalid token"}, { status : 401 }); 
    }
    
    revalidateTag(tag);

    return Response.json({succes: true});
}