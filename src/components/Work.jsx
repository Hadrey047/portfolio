import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2020,
    title: 'Website Designing',
    duration:'3 Years',
    details: 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    year: 2023,
    title: 'UI/UX Designing',
    duration:'2 Years',
    details: 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    year: 2024,
    title: 'Software Engineering',
    duration:'1 Years',
    details: 
    'This is a banking app that solve the User Experience problems normally encounter by people with banking apps. This app have a seemless upboarding of customers, fast banking experience etc'

  }
]

function Work() {
  
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item,idx)=>(
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work