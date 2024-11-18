import React from 'react'

export default async function Page({params}) {
    let {id}=await params;
  return (<>
    <h2>Producto {id}</h2>
    <Link href="/rutaDinamica">Volver atrás</Link>
  </>  
  )
}
