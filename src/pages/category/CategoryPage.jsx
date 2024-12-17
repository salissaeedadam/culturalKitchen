import React from 'react'
import { useParams } from 'react-router'
import { CategoryWrapper } from './CategoryWrapper';

const CategoryPage = () => {
    const {category} = useParams();
  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-center text-5x1 xl:text-6xl py-10 font-semibold text-secondary sm:text-6x1 sm:leading-relaxed capitalize'>{category}</h1>
        <CategoryWrapper/>
    </div>
  )
}

export default CategoryPage