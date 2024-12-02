import React from 'react'
import TypeList from './TypeList'

const TypeSelect = () => {
  return (
    <>
    <div class="d-flex gap-2 justify-content-center py-5">
            <button class="btn btn-primary rounded-pill px-3" type="button" id='tv'>tv</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='movie'>movie</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='ova'>ova</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='special'>special</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='ona'>ona</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='music'>music</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='cm'>cm</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='pv'>pv</button>
            <button class="btn btn-primary rounded-pill px-3" type="button" id='tv_special'>tv_special</button>
    </div>

    {/* <TypeList ty={document.getElementById("id").addEventListener("click",TypeList(id))}/> */}
    {/* {document.getElementById("id").addEventListener("click",TypeList(id))} */}

    </>
  )
}

export default TypeSelect