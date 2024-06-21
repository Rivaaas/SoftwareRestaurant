import React from 'react'
import {prisma} from '../../src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon'

async function getCategories() {
    return await prisma.category.findMany()
}


export default async function OrderSideBar () {

    const categories = await getCategories()

    return (
        <aside className="md:w-72 md:h-screen bg-white">
            <nav className='mt-10'>
                {categories.map(category => (
                    // eslint-disable-next-line react/jsx-key
                    <CategoryIcon
                        key={category.name}
                        category={category}
                    />
                ))}
            </nav>
        </aside>
    )
}