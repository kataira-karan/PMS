import React from 'react'

const Board = (props) => {

  const {title , issues } = props

  return (
    <div className='p-4  bg-darkGray shadow-lg   rounded h-50h w-20w '>
        <span className='sm font-bold w-full '> {title}  </span>

        <div className='mt-4 w-full flex flex-col'>

            {
                issues.map((issue)=>{
                    return (
                        <span key={issue._id} className='shadow-lg hover:scale-105 text-black transition ease-in-out w-full p-2 rounded text-sm  h-full my-2 bg-white hover:cursor-pointer' > {issue.name} </span>
                    )        
                })
            }
            
            
        </div>
    </div>
  )
}

export default Board

