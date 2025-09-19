import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "convex/react";


export const CreateUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        ImageUrl: v.string()
    },
    handler: async(ctx,args) => {
       // Check if a user with the given email already exists
       const user= await ctx.db.query("UserTable")
       .filter(q=>q.eq(q.field("email"),args.email)).collect();
       if(user.length===0){
        // If not, insert the new user
        const data = {
            name: args.name,
            email: args.email,
            ImageUrl: args.ImageUrl
        };
        const result = await ctx.db.insert("UserTable", {
            ...data
        });
        console.log(result);
        return {
            ...data,
            result
        };
       }
         return user[0];
    }
})