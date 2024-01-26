import React from 'react'
import './App.css'
import { Background } from './components/Background'
import MainForm from './components/Form'
import { Container } from './components/Container'
import { useFormState } from './hooks/useFormState'
import SuccessForm from './components/SuccessForm'
import ErrorForm from './components/ErrorForm'

const App = (): React.ReactElement => {
  const { randomIndex, fetchOffersCallback, offers, submittingForm } = useFormState()

  React.useEffect(() => {
    fetchOffersCallback()
  }, [fetchOffersCallback])

  const renderForm = React.useMemo(() => {
    if (submittingForm === null) {
      return <MainForm/>
    }
    if (submittingForm) {
      return <SuccessForm/>
    } else {
      return <ErrorForm/>
    }
  }, [submittingForm])

  return (
      <div className="App">
        <Background image={offers[randomIndex]?.desktop}>
          <Container>
              {renderForm}
          </Container>
        </Background>
      </div>
  )
}

export default App
