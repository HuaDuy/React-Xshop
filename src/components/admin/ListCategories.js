import React from 'react'
import { NavLink } from 'react-router-dom';

const ListCategories = (props) => {
    const { categories, onRemoveCate } = props;
    const result = categories.map((cate) => 
        <tr key={cate._id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium">{cate.name}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <NavLink to={"categories/edit/" + cate._id}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path to={"categories/edit/" + cate._id} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </NavLink>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <a className="del" onClick={ () => { onRemoveCate(cate._id) } }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </a>

                    </div>
                </div>
            </td>
        </tr>


    )


    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Tên danh mục</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListCategories
