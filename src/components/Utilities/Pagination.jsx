import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0,
        })
    }

     const handleNextPage = () => {
        setPage((prevState) => {
            if (prevState < lastPage) {
                return prevState + 1
            }
            return prevState
        })
        scrollTop()
    }

    const handlePreviousPage = () => {
        setPage((prevState) => {
            if (prevState > 1) {
                return prevState - 1
            }
            return prevState
        })
        scrollTop()
    }

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
        {page <= 1 ? null :
            <button className="transition-all hover:text-color-accent" onClick={handlePreviousPage}>Previous</button>
        }
        <p>{page} of {lastPage}</p>
        {page >= lastPage ? null :
            <button className="transition-all hover:text-color-accent" onClick={handleNextPage}>Next</button>
        }
    </div>
  )
}

export default Pagination