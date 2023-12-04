import React from 'react'
import SearchBar from '../components/SearchBar'

const Dashboard = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row p-2">
                <SearchBar/>
            </div>
        </div>
    </>
  )
}

export default Dashboard