import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { GroupJob } from "./GroupJob";

export function HomePage() {
    return (
    <div className='container-fluid'>
        <div className='row'>
            <div className="column">
                <SearchBar />

                <div className='row'>
                    <div className='col-9'>
                        <GroupJob nameGroup = "Group 1"></GroupJob>
                        <GroupJob nameGroup = "Group 2"></GroupJob>
                    </div>
                    <div className='col-3'>
                        <p>This columns will be used for something</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}