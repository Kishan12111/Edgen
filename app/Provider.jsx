import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react'
import React, { useEffect } from 'react'

function Provider({children}) {
    const {user} = useUser();

    useEffect(() => {
        user && CreateNewUser();
    }, [user]);

    const CreateUser = useMutation(api.user.CreateUser);
    const CreateNewUser = async () => {
       if (user) {
           const result = await CreateUser({
               name: user.name ?? "",
               email: user.primaryEmailAddress?.emailAddress ?? "",
               ImageUrl: user.imageUrl ?? ""
           });
              console.log(result);
       }

    }
    
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
