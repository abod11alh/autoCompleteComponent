import React, { FC } from 'react'

export interface layoutProps{
    
}

export const Layout : FC<layoutProps>=  ({children})=>{

    return <div>
         <h1>Auto complete component</h1>
        {children}
    </div>
}

  