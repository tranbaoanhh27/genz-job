import React, { useState, useEffect } from "react";
import ResultList from "./result-list/ResultList";
import { LightTheme } from "../../assets/themes";
import axios from "axios";

export default function SearchResultPage(props) {
    const theme = LightTheme;
    document.body.style.background = theme.background;
    const [results, setResults] = useState([]);

    console.log("Received keyword: " + props.keyword);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + "/user/search/" + props.keyword)
            .then((response) => {
                if (response.status === 200) {
                    let resultsList = response.data.map((res) => {
                        var tmp = {
                            imageUrl:
                                "https://phys.hcmus.edu.vn/uploads/vat-ly-tin-hoc/Nh%C3%A2n%20s%E1%BB%B1%201/Le%20Hoai%20Bac.jpg",
                            imageAlt: "GS Le Hoai Bac",
                            title: res.UserName,
                        };
                        return tmp;
                    });
                    setResults(resultsList);
                    if (resultsList.length === 0) {
                        alert(`Không tìm thấy người dùng "${props.keyword}"`)
                    }
                }
            });
    }, [props.keyword]);

    return (
        <div>
            <ResultList results={results} theme={theme} />
        </div>
    );
}
