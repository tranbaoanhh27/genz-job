import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { GroupJob } from "./GroupJob";
import { LightTheme } from "../../assets/themes";

export function HomePage() {
    document.body.style.background = LightTheme.background;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="column">
                    <SearchBar />

                    <div className="row">
                        <div className="col-9">
                            <GroupJob nameGroup="Group 1"></GroupJob>
                            <GroupJob nameGroup="Group 2"></GroupJob>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary" disabled>
                                        Mở bộ lọc
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
