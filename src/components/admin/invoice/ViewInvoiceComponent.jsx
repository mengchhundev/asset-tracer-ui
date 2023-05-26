import React from 'react';

const ViewInvoiceComponent = () => {
    return (
        <div>
      <main className="h-full overflow-y-auto">
        <div className="mt-5 py-10 gap-6 bg-white rounded-3xl overflow-hidden">
            <p className='px-10 pb-5'>View Invoice</p>
            <hr/>
            <p className='pt-5 px-10 pb-1'>Invoice detail</p>
            <div className='grid grid-cols-6 px-10'>
            <div className='col-span-4'>
            <hr className='pb-5'/>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <td className='bg-primary'>Invoice</td>
                        <td className='bg-primary'>Supplier</td>
                        <td className='bg-primary'>Date</td>
                        <td className='bg-primary'>Purchaser</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#150</td>
                        <td>Computer shop</td>
                        <td>Jan 6 2020</td>
                        <td className='flex justify-between'>
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                            ></div>
                            </div>
                            <div>
                            <p className='text-sm text-text-color'>John Wick</p>
                            <p className='text-xs text-text-color'>Admin</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <p className='pt-3 pb-5'>Asset</p>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <td className='bg-primary'>Invoice</td>
                        <td className='bg-primary'>Supplier</td>
                        <td className='bg-primary'>Date</td>
                        <td className='bg-primary'>Purchaser</td>
                        <td className='bg-primary'>Purchaser</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#150</td>
                        <td>Computer shop</td>
                        <td>Jan 6 2020</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>#150</td>
                        <td>Computer shop</td>
                        <td>Jan 6 2020</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>#150</td>
                        <td>Computer shop</td>
                        <td>Jan 6 2020</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>#150</td>
                        <td>Computer shop</td>
                        <td>Jan 6 2020</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>

                    <div className='flex justify-end'>
                        <div className='flex space-x-4 justify-between border-b px-2 pt-5'>
                        <p>Grand Total</p>
                        <p>1930$</p>
                        </div>             
                    </div>
                    
    
            </div>
            <div className='col-span-2'>
                 
            </div>
            </div>
        </div>
      </main>
    </div>
    );
}

export default ViewInvoiceComponent;
