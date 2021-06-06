import React from 'react'
import { NavLink } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className="col-md-2 py-4 text-gray-500 dark:text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="#">
                X-SmartPhone
        </a>
            <ul>
                <li className="relative px-6 py-3">
                    <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/admin/product">
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span className="ml-4">Sản phẩm</span>
                    </NavLink>
                </li>
                <li className="relative px-6 py-3">
                    <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/admin/categories">
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-4">Danh mục</span>
                    </NavLink>
                </li>
            </ul>
        </div>

    )
}

export default SideBar
