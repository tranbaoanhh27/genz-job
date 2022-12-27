import React, { Component, useState } from "react";
import { SearchBar } from "./SearchBar";
import { GroupJob } from "./GroupJob";
import { LightTheme } from "../../assets/themes";
import { FilterArea } from "./Filter";

import { defaultGroupJobsHomepage } from "../../Data/Homepage";

export function HomePage() {

    document.body.style.background = LightTheme.background;

    const [groupJob, setGroupJob] = useState( defaultGroupJobsHomepage );

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="column">
                    <SearchBar setGroupJob={setGroupJob} />

                    <div className="row">
                        <div className="col-9">
                            { groupJob.map( (value, id) => <GroupJob groupJob={value} />) }
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#filterArea">Mở bộ lọc</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FilterArea />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
