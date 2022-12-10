import React, { Component, useState } from "react";

export function Carousel() {
    return (
        <div className="d-flex col-lg-5 align-items-center justify-content-center h-100">
            <div
                id="carousel-boarding"
                className="carousel slide"
                data-interval="1000"
                data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carousel-boarding"
                        data-bs-slide-to="0"
                        className="active"></button>
                    <button
                        type="button"
                        data-bs-target="#carousel-boarding"
                        data-bs-slide-to="1"></button>
                    <button
                        type="button"
                        data-bs-target="#carousel-boarding"
                        data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="image0.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="image1.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="image2.jpg"
                            className="img-fluid"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-boarding"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-boarding"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
}