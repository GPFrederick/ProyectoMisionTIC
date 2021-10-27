import React, { useState, useEffect } from 'react';
import Table from 'components/Table';
import { useGlobalFilter } from 'react-table';
import { getSales } from 'utils/api';

function MasterSales() {
  const [sales, setSales] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID Venta',
        accessor: '_id',
        filter: useGlobalFilter,
      },
      {
        Header: 'Nombre cliente',
        accessor: 'cliente',
      },
      {
        Header: 'ID cliente',
        accessor: 'idCliente',
      },
      {
        Header: 'Nombre vendedor',
        accessor: 'vendedor',
      },
      {
        Header: 'Total venta',
        accessor: 'total_venta',
      },
      {
        Header: 'Fecha',
        accessor: 'created_at',
      },
    ],
    []
  );

  useEffect(() => {
    async function loadSales() {
      const response = await getSales();
      if (response.status === 200) {
        setSales(response.data);
      }
    }
    loadSales();
  }, []);

  return (
    <div className='product-container-usu'>
      <div className='rounded-3xl ml-5 mt-5 product-div-usu'>
        <div className='container-usu'>
          <div className='maestro-usu'>
            <h1>Maestro de Ventas</h1>
          </div>
          <div className='container-eye'>
            <button className='btn-save'>
              <i className='far fa-save'></i>
            </button>
          </div>
        </div>
        <div className='container-reg asd'>
          <div className='column'>
            <div className='mt-7'>
              <Table columns={columns} data={sales} />
            </div>
          </div>
        </div>
      </div>
    </div>
    /*<div className='min-h-full bg-gray-500 text-gray-900'>
      <main className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <div className=''>
          <h1 className='text-xl font-semibold'>Maestro de ventas</h1>
        </div>
        <div className='mt-6'>
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>*/
  );
}

export default MasterSales;
