import React from 'react'

const TableHeaderDistributor  = ({estadoactual}) => {
    return (
        <>
            <div className="d-flex justify-content-around py-2 border-bottom mb-5 d-none-991">
                <p className="text-white vh-width20 text-center"># Servicio</p>
                <p className="text-white vh-width20 text-center">Fecha</p>
                <p className="text-white vh-width20 text-center">Ciudad Entrega</p>
                <p className="text-white vh-width20 text-center">Direccion Entrega</p>
                <p className="text-white vh-width20 text-center">Estado</p>
                {estadoactual === 'guardado'
                ?
                (
                    <>
                      <p className="text-white vh-width20 text-center">Recoger</p>
                    </>
                )
                : estadoactual === 'recogido'
                ?
                (
                    <>
                    <p className="text-white vh-width20 text-center">Entregar</p>
                    </>
                )

                :
                (
                    <>
                    </>
                )
                }
                <p className="text-white vh-width20 text-center">Novedad</p>
                <p className="text-white vh-width20 text-center">Ver Mas</p>
            </div>
        </>
    )
}

export default TableHeaderDistributor 