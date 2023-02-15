import React, { useState } from 'react'
import { Container} from 'reactstrap'

const HeroBanner = (props) => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
    setSelectedModel(null);
  }

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFilter(selectedMake, selectedModel);
  }

  return (
    <>
      <div className="banner_items banner_item mt0">
        <Container>
          <div className="hero_details">
            <h2 className="text_style mb-3">Better way to Book with us</h2>
          </div>
        </Container>

        <Container>
        <div className="hero_section">
        <div className="hero_sec_detail"> Filter your search</div>
        <div className="hero_form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className='make_label'>
                  Make:
                  <select value={selectedMake} onChange={handleMakeChange}>
                    <option value="">Select make...</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label className='model_label'>
                  Model:
                  <select value={selectedModel} onChange={handleModelChange} disabled={!selectedMake}>
                    <option value=""> Select model...</option>
                    {selectedMake === "Toyota" && <option value="Camry">Camry</option>}
                    {selectedMake === "Toyota" && <option value="Corolla">Corolla</option>}
                    {selectedMake === "Honda" && <option value="Civic">Civic</option>}
                    {selectedMake === "Honda" && <option value="Accord">Accord</option>}
                    {selectedMake === "Ford" && <option value="F-150">F-150</option>}
                    {selectedMake === "Ford" && <option value="Mustang">Mustang</option>}
                  </select>
                </label>
              </div>
              <button type="submit" className="search_btn" disabled={!selectedMake || !selectedModel}>Search</button>
            </div>
           
          </form>
        </div>
      </div>

        </Container>
      </div>

      


    </>

  )
}

export default HeroBanner