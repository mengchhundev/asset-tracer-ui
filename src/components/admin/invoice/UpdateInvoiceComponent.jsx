import React from 'react';

const UpdateInvoiceComponent = () => {
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
            <label class="block mb-2 text-sm pt-5 font-medium text-text-color">Supplier</label>
                    <input
                      placeholder='Supplier'
                      type="text"
                      class="border text-sm rounded-lg w-full py-2 px-3"
                    />
            <label class="block mb-2 text-sm pt-5 font-medium text-text-color">Invoice Code</label>
                    <input
                      placeholder='Invoice Code'
                      type="text"
                      class="border text-sm rounded-lg py-2 px-3"
                    />
            
            <p className='pt-5 pb-1'>Asset</p>
            <hr />
            

                  
                    
    
            </div>
            <div className='col-span-2'>
                 
            </div>
            </div>
        </div>
      </main>
    </div>
    );
}

export default UpdateInvoiceComponent;
