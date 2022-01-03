import {useState} from 'react'

function Search({cb=Function.prototype}) {
  const [value, setValue] = useState('')

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = (e => {
    cb(value);
  })

  return (
    <div className="row">
      <div className="input-field col s12">
        <input type="search" id='search-field' placeholder="search" onKeyDown={handleKey} onChange={(e) => setValue(e.target.value)} value={value} />
        <button className="btn" onClick={handleSubmit}>search</button>
      </div>
    </div>
  )
}

export {Search}