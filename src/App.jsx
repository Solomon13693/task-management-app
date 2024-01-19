import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import TaskForm from './components/tasks/TaskForm'
import TaskContainer from './components/tasks/TaskContainer'
import { Toaster } from 'react-hot-toast'

const App = () => {

  return (
    <div className='w-full p-3 md:p-6 mx-auto bg-[#F4F7FE] min-h-screen'>

      <Header />

      <Container>

        <div className="flex flex-wrap flex-col-reverse md:flex-row mt-5 gap-y-8">

          <div className="w-full md:w-2/3 xl:w-[70%] md:pr-4">

            <TaskContainer />

          </div>

          <div className="w-full md:w-1/3 xl:w-[30%] md:pl-4">

            <TaskForm />

          </div>

        </div>

      </Container>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </div>

  )
}

export default App