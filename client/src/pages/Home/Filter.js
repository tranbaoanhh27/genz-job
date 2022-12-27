import React, { useState, useRef } from "react";

import { defaultNameFilter } from "../../Data/Homepage";

const specificValuesFilterDic = {
    "Ngày đóng": <RangeDate />,
    "Ngày tạo": <RangeDate />,
    "Ngày cập nhật": <RangeDate />,
    "Mức lương": <RangeValue minVal={0} maxVal={1000} step={10} value={500} />
}

function RangeDate() {

    return (
        <div className="row">
            <div className="col">
                <input type="date"></input>
            </div>
            <div className="col">
                <p className="mb-0"> tới </p>
            </div>
            <div className="col">
                <input type="date"></input>
            </div>
        </div>
    )
}

function RangeValue({ minVal, maxVal, step, value }) {

    const [rangeValue, setRangeValue] = useState(value);

    const inputElement = useRef();

    const onChangeHadler = () => {
        setRangeValue(inputElement.current.value);
    }

    return (
        <div className="row">
            <div className="col">
                <input type="range" min={minVal} max={maxVal} step={step} defaultValue={value} ref={inputElement} onChange={onChangeHadler}></input>
            </div>
            <div className="col">
                { rangeValue + " USD"}
            </div>
        </div>
    )
}

const FilterRow = React.memo ( ({ nameFilter }) => {

    const [specificValuesFilter, setSpecificValuesFilter] = useState({
        type: null,
        value: null,
        options: null
    })

    const valueNameFilter = useRef();

    const onChangeValue = () => {
        setSpecificValuesFilter({...specificValuesFilter, type: specificValuesFilterDic[valueNameFilter.current.value]});
    }

    return (
        <div className="row mb-3">
            <div className="col">
                <select name={nameFilter} id={nameFilter} ref={valueNameFilter} onChange={onChangeValue}>
                    {defaultNameFilter.map( (v) => <option value={v}>{v}</option>)}
                </select>
            </div>
            <div className="col">
                {specificValuesFilter.type === "null" ? null : specificValuesFilter.type}
            </div>
        </div>
    )
})

export function FilterArea() {

    const [listFilter, setListFilter] = useState([
        {}
    ]);

    const onAddFilterHandler = () => {
        setListFilter([...listFilter, {}])
    }
    
    return (
        <div id="filterArea" className="collapse mt-3">
            <div className="card">
                <div className="card-body">
                    { listFilter.map( (v, id) => <FilterRow nameFilter={`nameFilter-${id}`} /> )}

                    <div className="row mt-3">
                        <div className="col text-center">
                            <p className="mb-0"><a href="#" onClick={onAddFilterHandler} style={{textDecoration: "none"}}>+ Thêm tiêu chí lọc bao gồm</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}